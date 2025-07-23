const GITA_SHLOKAS = [
    {
        adhyay: 1,
        shloka: 1,
        sanskrit: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
        english: "dhṛtarāṣṭra uvāca | dharmakṣetre kurukṣetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||",
        translation: "Dhritarashtra said: O Sanjaya, after assembling in the holy place of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?"
    },
    {
        adhyay: 2,
        shloka: 47,
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
        english: "karmaṇy evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi ||",
        translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."
    },
    {
        adhyay: 3,
        shloka: 21,
        sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः | स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ||",
        english: "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ | sa yat pramāṇaṁ kurute lokas tad anuvartate ||",
        translation: "Whatever action a great man performs, common men follow. Whatever standards he sets by his exemplary acts, all the world pursues."
    },
    {
        adhyay: 4,
        shloka: 7,
        sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||",
        english: "yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||",
        translation: "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself."
    },
    {
        adhyay: 5,
        shloka: 18,
        sanskrit: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि | शुनि चैव श्वपाके च पण्डिताः समदर्शिनः ||",
        english: "vidyā-vinaya-sampanne brāhmaṇe gavi hastini | śuni caiva śva-pāke ca paṇḍitāḥ sama-darśinaḥ ||",
        translation: "The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brahmana, a cow, an elephant, a dog, and a dog-eater [outcaste]."
    },
    {
        adhyay: 8,
        shloka: 15,
        sanskrit: "मामुपेत्य पुनर्जन्म दुःखालयमशाश्वतम् | नाप्नुवन्ति महात्मानः संसिद्धिं परमां गताः ||",
        english: "mām upetya punar janma duḥkhālayam aśāśvatam | nāpnuvanti mahātmānaḥ saṁsiddhiṁ paramāṁ gatāḥ ||",
        translation: "After attaining Me, the great souls, who are yogīs in devotion, never return to this temporary world, which is full of miseries, because they have attained the highest perfection."
    }
];

const GITA_DETAILS = {
    speaker: "Lord Krishna (primarily), Sanjaya (narrating to Dhritarashtra)",
    totalAdhyays: 18,
    totalShlokas: 700,
    shlokasPresentedBy: "Lord Krishna, Arjuna, Dhritarashtra, Sanjaya"
};

let currentShlokaIndex = 0;

const introPage = document.getElementById('intro-page');
const gitaVachanPage = document.getElementById('gita-vachan-page');

const startReadingBtn = document.getElementById('start-reading-btn');
const shlokaNumberElem = document.getElementById('shloka-number');
const sanskritTextElem = document.getElementById('sanskrit-text');
const translationTextElem = document.getElementById('translation-text');
const prevShlokaBtn = document.getElementById('prev-shloka-btn');
const nextShlokaBtn = document.getElementById('next-shloka-btn');

if (startReadingBtn) {
    startReadingBtn.addEventListener('click', startReading);
}
if (prevShlokaBtn) {
    prevShlokaBtn.addEventListener('click', showPreviousShloka);
}
if (nextShlokaBtn) {
    nextShlokaBtn.addEventListener('click', showNextShloka);
}

function displayShloka() {
    const shloka = GITA_SHLOKAS[currentShlokaIndex];
    shlokaNumberElem.textContent = `Adhyay ${shloka.adhyay}, Shloka ${shloka.shloka}`;
    sanskritTextElem.innerHTML = `Sanskrit: ${shloka.sanskrit}<br>English Transliteration: ${shloka.english}`; // Display both Sanskrit and transliteration
    translationTextElem.textContent = `Translation: ${shloka.translation}`;

    prevShlokaBtn.disabled = currentShlokaIndex === 0;
    nextShlokaBtn.disabled = currentShlokaIndex === GITA_SHLOKAS.length - 1;
}

function showNextShloka() {
    if (currentShlokaIndex < GITA_SHLOKAS.length - 1) {
        currentShlokaIndex++;
        displayShloka();
    }
}

function showPreviousShloka() {
    if (currentShlokaIndex > 0) {
        currentShlokaIndex--;
        displayShloka();
    }
}

function initializeGitaVachan() {
    document.getElementById('gita-speaker').textContent = GITA_DETAILS.speaker;
    document.getElementById('total-adhyays').textContent = GITA_DETAILS.totalAdhyays;
    document.getElementById('total-shlokas').textContent = GITA_DETAILS.totalShlokas;
    document.getElementById('shlokas-presented-by').textContent = GITA_DETAILS.shlokasPresentedBy;
    showPage(introPage);
}

function startReading() {
    displayShloka();
    showPage(gitaVachanPage);
}

function showPage(pageElement) {
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => page.classList.remove('active'));
    pageElement.classList.add('active');
}

window.onload = initializeGitaVachan;
