from crime_detector import CrimeClassifier


def test_exact_english_example():
    classifier = CrimeClassifier()
    prediction = classifier.predict("robbed with knife", language="en", top_k=1)[0]
    assert prediction.crime == "robbery"
    assert prediction.confidence == 1.0


def test_hindi_example():
    classifier = CrimeClassifier()
    prediction = classifier.predict("चाकू दिखाकर पैसे लूट लिए", language="hi", top_k=1)[0]
    assert prediction.crime == "robbery"
    assert prediction.label == "लूट"


def test_telugu_example():
    classifier = CrimeClassifier()
    prediction = classifier.predict("ఓటీపీ చెప్పించి డబ్బులు దోచుకున్నారు", language="te", top_k=1)[0]
    assert prediction.crime == "cyber fraud"
    assert prediction.label == "సైబర్ మోసం"


def test_empty_text_returns_no_predictions():
    classifier = CrimeClassifier()
    assert classifier.predict("   ") == []
