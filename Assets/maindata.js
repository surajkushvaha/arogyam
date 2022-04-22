var symptoms = ["Abdominal Pain (Stomach Pain), Long-term",
    "Abdominal Pain (Stomach Pain), Short-term",
    "Ankle Problems",
    "Breast Problems in Men",
    "Breast Problems in Women",
    "Chest Pain in Infants and Children",
    "Chest Pain, Acute",
    "Chest Pain, Chronic",
    "Cold and Flu",
    "Cough",
    "Diarrhea",
    "Ear Problems",
    "Elimination Problems or Constipation",
    "Elimination Problems or Constipation in Infants and Children",
    "Eye Problems"]
// "Facial Swelling",
// "Feeding Problems in Infants and Children",
// "Fever",
// "Fever in Infants and Children",
// "Foot Problems",
// "Genital Problems in Infants (Female)",
// "Genital Problems in Infants (Male)",
// "Genital Problems in Men",
// "Genital Problems in Women",
// "Hair Loss",
// "Hand/Wrist/Arm Problems",
// "Headaches",
// "Hearing Problems",
// "Hip Problems",
// "Knee Problems",
// "Leg Problems",
// "Lower Back Pain",
// "Menstrual Cycle Problems",
// "Mouth Problems",
// "Mouth Problems in Infants and Children",
// "Nausea and Vomiting",
// "Nausea and Vomiting in Infants and Children",
// "Neck Pain",
// "Neck Swelling",
// "Shortness of Breath",
// "Shortness of Breath in Infants and Children",
// "Shoulder Problems",
// "Skin Rashes & Other Skin Problems",
// "Throat Problems",
// "Tooth Problems",
// "Urination Problems"]
var que = [[
    "Does your pain get worse after you eat a big meal?",
    "Do you feel pressure in your upper abdomen that gets worse when you bend over or lie down at night?",
    "Is the pain relieved by antacids? Is your pain improved by eating? (Peptic ulcer disease could be a potential cause).",
    "Does the pain start in your upper middle or upper right abdomen, and is it brought on by greasy or fatty foods?",
    "Does your pain get worse when you’re under stress or do you alternate between loose and hard bowel movements?",
    "Do you have soft or diarrhea-like bowel movements many times throughout the day AND mucus or blood in your stool?",
    "Do you have recurrent bouts of pain in the lower left side of your abdomen along with fever?",
    "Do you have bright red blood in or on your bowel movements?",
    "Has it been a few days or longer since you last had a bowel movement and do you have to strain when you have a bowel movement? Do you have bloating and/or abdomen distension?",
    "Has your appetite decreased? Have you lost 10 to 15 pounds over the past few months without trying?",
    "Do your skin or eyes have a yellow color, or is your urine dark, or are your stools turning white?",
    "Have you had fever, sore throat, or extreme tiredness? Do you have pain in your upper abdomen, mostly on the left upper quadrant?",
    "Do you have abdominal bloating and discomfort made worse by milk or wheat products?",
    "Are your bowel movements yellow and/or greasy, and do they float in the toilet?",
    "Do you have excess gas that smells foul and you have occasional loose bowel movements?"
], [
    "Do you have abdominal pain that is severe; constant and dull; severe and knife-like; or severe cramping?",
    "Are you pregnant, or do you believe you might be pregnant?",
    "Is your stomach very tender to touch? Does it hurt when you are driving and hit a bump or a pothole in the road? Do you have bloody diarrhea or stools that are black or tarry? Are you vomiting blood? Do you have a fever, in addition to your abdominal pain?",
    "Does the pain start in your upper middle or upper right abdomen and shift to your back, and does it occur or worsen when you eat fatty or greasy food?",
    "Do you have a sudden sharp pain that starts in the back near the ribs and moves down toward the groin?",
    "Is your pain in the lower right abdomen, and do you have blood or mucus in your stools?",
    "Do you have a mild ache or burning pain in the upper abdomen, or cramping pain that comes and goes?",
    "Do you have watery diarrhea, fever, muscle aches, chills, nausea, or vomiting?",
    "Has it been a few days or longer since you have had a bowel movement and do you have bloating or distension of your abdomen? Do you have to strain when you have a bowel movement?",
    "Do you have pain or a burning sensation in the upper abdomen that is either relieved or gets worse when you eat?",
    "Are you a woman who has a constant pain in the lower abdomen along with a vaginal discharge?",
    "Do you have a mild pain, discomfort, or a feeling of pressure in the lower abdomen along with a burning sensation when you urinate?"
],
[
    "Did you begin to have pain and/or swelling after the ankle was hit or after a fall or a twisting injury?  ",
    "Is the ankle significantly swollen, and is the pain so intense that you can’t put weight on that foot?",
    "Is the ankle swollen and bruised, and can you still put weight on that foot?",
    "Do you have swelling, stiffness (especially in the morning), and/or pain that comes and goes in both ankles?",
    "Do you have a fever, and is one or more of your joints painful, swollen, and red?",
    "Did the pain start suddenly, and is it painful when clothing or bedding rubs against your ankle?",
    "Do you usually feel pain before or during a change in the weather, and/or are you experiencing swelling, stiffness, and pain that gets worse during or after you use your ankle?"
],
[
    "Do you have swelling under and/or around one or both nipples, and are you between the ages of 10 and 25?",
    "Do you have swelling under and/or around one or both nipples, and are you taking any hormones or new medicines?",
    "Is your nipple red, sore, cracked, or blistered after you have been running in sweat-soaked or wet workout clothes?",
    "Do you have a breast lump that is tender and feels like a soft grape?",
    "Do you have a painless lump that feels rubbery and moves easily within the breast tissue, like a small marble?",
    "Do you have a hard, painless lump under your nipple?",
    "Have you noticed any redness or scaling of the breast skin or nipple, or is your nipple inverted (pulling into the breast)?",
    "Have you noticed skin puckering or dimpling that makes your breast skin look like an orange peel?",
    "Have you had any type of nipple discharge?"
], [
    "Do you have swelling and tenderness in one or both breasts?",
    "Have you given birth recently? Is there red streaking noted near the nipple?",
    "Do you have tenderness in your breasts, and do both breasts feel fuller and heavier?",
    "Does the swelling and tenderness seem to occur at about the same time during every menstrual cycle?",
    "Do you feel thickened, bumpy areas throughout your breast?",
    "Do you feel thickened, bumpy areas throughout your breast?",
    "Do you feel a tender lump, smaller than a penny, that wasn’t there last month and may feel like a soft grape?",
    "Do you feel a painless lump that is deep in your breast, possibly attached to your ribs?",
    "Are you breastfeeding and having pain and cracking of the nipple?",
    "Have you noticed any breast changes, such as skin dimpling or puckering (skin looks like an orange peel), redness, or scaling of the nipple or breast skin, or have you had any nipple discharge?",
    "Do you have a sore on your breast that won’t heal?"
],
[
    "Does your child have a fever, a cough that produces mucus, and shortness of breath?",
    "Does your child have a tight cough, wheezing, and shortness of breath?",
    "Does your child have a dry cough and a sharp pain in the chest when he or she takes a deep breath?",
    "Does your child have sudden, sharp pain in one side of the chest with sudden shortness of breath?",
    "Does your child have a high fever, a very sore throat, and trouble breathing and/or swallowing? They may also be sitting forward resting on one arm (“tripoding.”)",
    "Does your child have pain and tenderness in the front of the chest, along the border of the breastbone and ribs, and does it get worse when your child coughs or takes a deep breath?"
],
[
    "Is the affected person an infant or child?",
    "Do you have severe chest pain?",
    "Do you have symptoms of a cold or the flu, such as fever, aches, chills, runny nose, and/or cough?",
    "Do you have a cough that produces greenish, yellowish, or tan mucus, a fever, and shortness of breath?",
    "Do you have a cough that produces a small amount of clear mucus, and does your chest hurt when you take a deep breath?",
    "Are you uncomfortable from your shortness of breath?",
    "Does the pain or discomfort occur only when you swallow or after you eat?",
    "Do you have a severe, sharp pain on one side of your chest when you take a deep breath?",
    "Do you experience shortness of breath when you are physically active and/or when you’re lying down?",
    "Do you have pressure in your chest, shortness of breath and numbness around your lips or in your hands or feet?",
    "Do you have any of the following symptoms: crushing pain or uncomfortable pressure in the middle of your chest that lasts more than a few minutes; squeezing pain in the chest or left upper arm; sweating and nausea; or severe shortness of breath?",
    "Do you have a painful, blistering rash on your chest or back?",
    "Do you have back pain that radiates around to the front of your chest?"
], [
    "Is the affected person an infant or child?",
    "Do you have shortness of breath?",
    "Do you have episodes of wheezing and a cough that won’t go away?",
    "Does your chest ache along the edges of your breastbone, and does your pain get worse when you cough or take a deep breath?",
    "Do physical activities, emotional stress, or extreme temperatures cause a feeling of pressure under the breastbone?",
    "Do you have fullness and pain under your breastbone or in the upper right side of your abdomen after eating a greasy or fatty meal?",
    "Do you have a burning sensation in your chest that either feels worse when you eat or drink, or feels better when you eat or drink, but gets worse a few hours later?",
    "Do you have stinging or burning pain at the same location where you had a recent case of SHINGLES?",
    "Do you have a tight feeling in your chest and on ongoing cough that produces a lot of mucus? Does this usually occur for 2-3 months around the same time each year over the past 1-2 (or more) years?",
    "Do you have an ongoing, mild cough, has your shortness of breath been increasing slowly for years, and have you been a smoker or been exposed to dust and fumes where you work?",
    "Do you have a fever, chills, or night sweats, or are you coughing up bloody mucus?"
],
[
    "Do you have a fever?",
    "Do you have a sore throat and headache without nasal drainage or a cough?",
    "Did your symptoms start suddenly, and do you have a combination of symptoms including muscle aches, fatigue, chills, sore throat, runny nose, and/or cough?",
    "Are you experiencing wheezing, shortness of breath, and a persistent cough that brings up clear, yellow, or green mucus?",
    "Do you have a headache or muscle aches, nausea or vomiting, and watery diarrhea?",
    "Are you experiencing a runny and/or itchy nose, sneezing, and itchy eyes that get worse when you are outside or around certain triggers?",
    "Are you experiencing sneezing, a sore throat with a cough, a headache, congestion, and a runny nose?",
    "Do you have pressure or pain around your eyes, cheeks, nose, or forehead; nasal congestion; a headache; a dry cough; and/or any type of discharge from your nose?"
], [
    "Has your cough begun recently? Consider recent exposures you may have experienced, including new pets, new environments, new medications, etc.",
    "Are you very short of breath, and are you coughing up pink, frothy mucus?",
    "Does your cough produce clear or pale yellow mucus?",
    "Does your cough produce yellow, tan, or green mucus?",
    "Does the cough come with shortness of breath and wheezing?",
    "Do you have heart problems? Also, do you have swelling in your legs and/or shortness of breath when you are active or after you have been lying down?",
    "Have you recently started coughing up blood or bloody sputum?",
    "Have you recently started having sharp chest pain, rapid heartbeat, swelling of the legs and sudden shortness of breath?",
    "Do you have a fever, chills and night sweats along with chest pain when you cough or take a deep breath?",
    "Have you unintentionally lost weight?",
    "Did you inhale dust, particles, or an object?",
    "Has you cough lasted longer than 6 weeks?"
], [
    "Are you also nauseated or vomiting?",
    "Did you recently start taking an antibiotic or other new over-the-counter or prescribed medicine or supplement?",
    "Did your symptoms begin 30 minutes to 2 hours after eating or drinking dairy products?",
    "Did your diarrhea develop within 2-8 hours after eating food that might be spoiled, or did someone else eat the same food and become ill too?",
    "Have you traveled recently to another country?",
    "Do you have sharp pain in the lower left side of your abdomen, and are you often constipated?",
    "Is your diarrhea watery, and do you have a headache or muscle aches and a low fever?",
    "Do you have persistent, severe abdominal cramps, gas, and watery diarrhea followed by greasy stools?",
    "Do you have a fever, and are you experiencing pain in the middle or upper abdomen that radiates to your back?",
    "Are you bloated, and are you experiencing severe lower abdominal pain or cramping?",
    "Do you have diarrhea along with gas, bloating, and stomach pains every time you eat certain foods?",
    "Do you have frequent loose bowel movements mixed with blood or mucus, and diffuse/generalized abdominal pain and cramping?",
    "Do your bowel movements alternate between constipation and diarrhea, and does your condition seem to get worse when you’re under stress?",
    "Have you had chronic constipation (long bouts between bowel movements associated with abdominal pain, bloating and straining to defecate), but suddenly experienced watery diarrhea that leaks out?"
],
[
    "Do you have a fever?",
    "Are you experiencing pain deep in the ear and/or fluid draining from the ear?",
    "Do you have redness and swelling of the outer ear and the surrounding skin?",
    "Do you have headache-type pain and redness behind your ear or tenderness when you touch the bone behind your ear?",
    "Do you have thick pus-filled (white) or bloody drainage from the ear canal that started after a sharp, sudden pain?",
    "Is your ear swollen, and does it itch or hurt when you pull on your ear or earlobe?",
    "Does your jaw joint “crack” when you chew or open your mouth, or do you feel tenderness in your jaw when chewing?",
    "Do you hear/feel fluid in your ear, and feel pressure or stuffiness that can’t be cleared with coughing, yawning, or swallowing, and do you have cold or flu symptoms?",
    "Do you have tooth pain on the same side as the ear pain when you bite down?",
    "Did your ear pain start during an airplane flight or right after you traveled on an airplane?",
    "Can you see or feel a “pimple” in the ear canal?",
    "Is the affected person a child who doesn’t have ear pain or redness but is having problems hearing?",
    "Is fullness of the ear present on one or both sides without any other symptoms? Does the person have a history of ear wax production?",
    "Do you have swelling or thickening of one or more ears after wrestling or doing another contact sport or fighting event (e.g., boxing or mixed martial arts)?"
],
[
    "Is the affected person an infant (under 1 year) or a child?",
    "Do you have pain or discomfort with your bowel movements?",
    "Do you have blood on, or mucous in, your bowel movements?",
    "Do you have to strain when you have a bowel movement, and are your stools hard and dry? Do you often feel bloated and have longer periods of time between bowel movements?",
    "Do you have a fever, chills, and intense pain near the anus even when you’re not having a bowel movement?",
    "Is there itching when you have a bowel movement?",
    "Do you have a small reddish mass of tissue sticking out of your anus?",
    "Is there occasional bright red blood in your stools, and do you have 1 or more small lumps near the rectum?",
    "Do you have itching around your rectum even when you’re not having a bowel movement?",
    "Are your bowel movements gray or whitish?",
    "Do you have problems moving your bowels without a laxative or enema?"
],
[
    "Does your child have frequent, watery bowel movements?",
    "Does your child strain to have a bowel movement, and are his or her stools very hard and dry? Does your child also have urine accidents (after previously being potty-trained)?",
    "Does your child have gas, bloating, and diarrhea, especially right after eating foods that contain wheat or cow’s milk?",
    "Does your child seem to have pain with bowel movements, or do you suspect he or she holds the bowel movements to prevent pain?"
],
[
    "Is your eye tearing?",
    "Do you have blurred vision?",
    "Have you recently injured your eye, and are you experiencing any of the following symptoms: sudden appearance of spots and strings floating in your field of vision; flashes of light in 1 or both eyes; partial loss of vision (like a shade being pulled down over part of your vision)?",
    "Is your eye red, and do you have severe eye pain, or has your vision suddenly decreased or become cloudy?",
    "Are you experiencing flu-like symptoms, such as fever, fatigue, muscle aches, and pain in one or both temples?",
    "Do you have thick nasal drainage and pain or pressure on your forehead and behind your eyes?",
    "Are your eyes red or sensitive to light, are you experiencing eye pain, and do you see dark, floating spots?",
    "Do you have diabetes, and have you noticed any changes in your vision?",
    "Are your eyes red, itchy, or swollen, or is there a bite-like swelling on one of your eyelids?",
    "Do you have a fever, and is your eyelid swollen, red, and/or tender to the touch?",
    "Is there a firm, painful lump in the eyelid or a tender ‘pimple’ on the edge of the eyelid?",
    "Is your eye red, is your vision blurry, and do you feel like you have sand in your eye (foreign body sensation)?",
    "Is the white of the eye pink, red, or irritated, and is there any secretion or mucus coming from the eye? Did you wake up with your eyelids sealed shut?",
    "Do you have a burning sensation in the eye, is the eye red and itchy, and is the skin around the eye scaling?",
    "Do you wear contact lenses, and do you have eye pain?"
]
]

var causes = [[
    [
        "This may be HEARTBURN, ACID REFLUX, and/or GASTROESOPHAGEAL REFLUX DISEASE (GERD).",
        "Keep a food diary (writing down what you eat and at what time to determine if patterns or certain food triggers are present). Bring that with you to your doctor. Eat more frequent, smaller meals."
    ],
    [
        "Your problem may be a HIATAL HERNIA.",
        "See your doctor. Eat more frequent, but smaller meals. Avoid eating 2-3 hours before bed. Don’t lie down right after you eat. Elevate the head of your bed with textbooks, boards, or bricks under the headboard or front feet of your bed to reduce discomfort."
    ],
    [
        "Your pain may be from GASTRITIS, an ULCER, or HEARTBURN. All are irritations of the stomach and esophagus.",
        "Eat smaller meals and use an over-the-counter antacid. If antacids don’t help and/or you find yourself using them more days than not in the average week, see your doctor."
    ],
    [
        "Your pain may be a sign of GALLSTONES or CHOLECYSTITIS (inflammation or infection of the gallbladder).",
        "See your doctor."
    ],
    [
        "Your pain may be from IRRITABLE BOWEL SYNDROME (also known as SPASTIC COLON).",
        "Try a diet high in soluble FIBER for 2 weeks. Take steps to reduce your stress and to exercise regularly. If you don’t get better, check with your doctor."
    ],
    [
        "You may have CROHN’S DISEASE or ULCERATIVE COLITIS, an inflammatory disease of the colon or large intestine.",
        "See your doctor. These disorders are treatable."
    ],
    [
        "You may have DIVERTICULITIS, an infection of small outpouchings or pockets (diverticula) in the colon.",
        "Any infection of the abdomen can be serious. Call your doctor right away."
    ],
    [
        "A bright red, bloody stool may be caused by a bleeding HEMORRHOID or a bleeding POLYP, but they can also be a sign of a more serious problem, such as CANCER of the colon.",
        "See your doctor."
    ],
    [
        "Your discomfort is probably from CONSTIPATION.",
        "Use a simple bulk-forming laxative and be sure to add lots of fiber and fluids to your diet. FIBER without fluids can create more bulk in your stool, so add both to your diet. If the constipation persists, call your doctor."
    ],
    [
        "Unintentional weight loss can be a sign of a serious condition, such as CANCER.",
        "See your doctor."
    ],
    [
        "You may have HEPATITIS, a serious infection of the liver.",
        "See your doctor."
    ],
    [
        "You may have MONONUCLEOSIS (“MONO”) or a similar VIRAL INFECTION.",
        "See your doctor. Treatment of MONO includes rest (make sure to avoid forceful contact to the abdomen), drinking plenty of fluids, and taking medicine to treat the symptoms."
    ],
    [
        "Your problem may be MALABSORPTION, an inability to absorb some foods, or LACTOSE INTOLERANCE or WHEAT/GLUTEN INTOLERANCE (CELIAC DISEASE) or SENSITIVITY.",
        "Keeping a food diary will help find patterns and potential food triggers. Avoid the foods and beverages that cause your symptoms. People who have LACTOSE INTOLERANCE can use lactose enzyme tablets or drops to help them digest foods that contain lactose."
    ],
    [
        "Your pancreas may not be producing enough enzymes for proper digestion. This condition is called PANCREATIC INSUFFICIENCY.",
        "Call your doctor. Your doctor may ask for a sample of your bowel movements to confirm pancreatic insufficiency."
    ],
    [
        "You might have a parasitic infection called GIARDIASIS. Other BOWEL INFECTIONS or MALABSORPTION may also cause these symptoms.",
        "See your doctor. To prevent parasitic infections, don’t drink untreated water from lakes or streams, and wash fruits and vegetables thoroughly before eating them."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call right away."
    ]
], [
    [
        "This will depend on the intensity and location of pain. RADIATION ENTERITIS is a possibility due to exposure to radiation.",
        "See you doctor."
    ],
    [
        "In pregnant women, lower abdominal or pelvic pain along with vaginal bleeding may be a sign of a serious condition, such as ECTOPIC PREGNANCY or MISCARRIAGE.",
        "Call your doctor right away or go to the emergency room if you are less than 20 weeks pregnant. Go to the labor and delivery department if you are over 20 weeks pregnant."
    ],
    [
        "These may be signs of a serious problem, such as:",
        ""
    ],
    [
        "You may have GALLSTONES, an INFECTION, or INFLAMMATION of the gallbladder.",
        "See your doctor right away."
    ],
    [
        "Your pain may be from a KIDNEY STONE or KIDNEY TUMOR. If you have a fever, you may have a KIDNEY or BLADDER INFECTION.",
        "Call your doctor right away or go the hospital."
    ],
    [
        "These may be signs of ULCERATIVE COLITIS or CROHN’S DISEASE. These are inflammatory diseases of the colon or large intestine.",
        "See your doctor."
    ],
    [
        "This may be GASTRITIS, GASTROESOPHAGEAL REFLUX DISEASE (GERD), OR PEPTIC ULCER DISEASE.",
        "Keep a food diary to evaluate for patterns or triggers. Take over-the-counter antacids. See your doctor if you are taking antacids more days than not in an average week."
    ],
    [
        "You may have GASTROENTERITIS, commonly called the stomach flu. Severe cases of gastroenteritis can lead to dehydration in infants and young children.",
        "Take over-the-counter fever-reducing medicines. (Don’t give children aspirin.) Drink water throughout the day/night. Call your doctor if vomiting and diarrhea persist for more than 2 days, or if you see any blood or mucus in the diarrhea. Call your doctor if you experience DEHYDRATION with such symptoms as lethargy, dry mouth, and/or decreased urination."
    ],
    [
        "CONSTIPATION may be the source of your discomfort. Occasionally a child will hold a bowel movement because of pain from a HEMORRHOID, an ANAL FISSURE, or during potty training.",
        "Be sure to include lots of FIBER in your diet and drink enough fluids. Bulk-forming laxatives can also help. Many laxatives are available to treat constipation in children. Your doctor can recommend one that is appropriate for your child. See your doctor if the pain or constipation continues."
    ],
    [
        "This may be from GASTRITIS, an irritation of the stomach, or from an ULCER.",
        "Try taking an over-the-counter antacid on a regular basis. See your doctor if an antacid doesn’t help, if the pain comes back quickly after taking one, or if you are taking an antacid most days of an average week."
    ],
    [
        "A dull, constant pain accompanied by a vaginal discharge may be a sign of PELVIC INFLAMATORY DISEASE (PID), an infection around your ovaries, uterus, and fallopian tubes.",
        "This condition requires an antibiotic. See your doctor."
    ],
    [
        "CYSTITIS, an infection of the urinary tract, can be painful and cause abdominal discomfort.",
        "See your doctor promptly."
    ],
    [
        "If the pain doesn’t stop within a few hours, call your doctor. For more information, please talk to your doctor. If you think your problem is serious, call right away."
    ]
],
[
    [
        "You may have a FRACTURE or a severe SPRAIN.",
        "See your doctor promptly. Don’t put weight on the injured ankle."
    ],
    [
        "You may have a SPRAINED ANKLE or a FRACTURE OF THE FIBULA.",
        "Raise the ankle above your heart while sitting or lying down. Use a compression wrap to help control swelling. Place an ice pack wrapped in a thin, damp cloth on the swollen area. You can also consider using a soft compression brace and crutches."
    ],
    [
        "You may have RHEUMATOID ARTHRITIS or OSTEOARTHRITIS (also called DEGENERATIVE JOINT DISEASE).",
        "See your doctor. He or she can treat the symptoms of rheumatoid arthritis or osteoarthritis with a combination of therapies."
    ],
    [
        "Fever and a painful, red, swollen joint may be caused by an INFECTED JOINT (also called SEPTIC ARTHRITIS). More than one affected joint may be caused by RHEUMATIC FEVER.",
        "URGENT"
    ],
    [
        "You may have GOUT (swelling and pain caused by too much uric acid in your body).",
        "See your doctor. During a gout attack (also called a flare), rest in bed until the pain eases up. Apply an ice pack wrapped in a thin, damp cloth to your ankle. Drink extra water to help flush uric acid from your body."
    ],
    [
        "These symptoms may be caused by OSTEOARTHRITIS (also called DEGENERATIVE JOINT DISEASE). Previous surgery or trauma to the ankle can also cause these symptoms.",
        "See your doctor. If you have osteoarthritis, he or she can treat your symptoms with a combination of therapies."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call right away."
    ]
],
[
    [
        "Hormone changes during puberty may cause GYNECOMASTIA, a benign (not cancerous) swelling of one or both breasts.",
        "In most cases, gynecomastia will go away on its own within 6 months to 2 years. See your doctor if you’re concerned, if breast tenderness is a problem, or if the breast tissue keeps growing."
    ],
    [
        "Hormones and some types of medicine may cause GYNECOMASTIA, a benign (not cancerous) swelling of one or both breasts.",
        "Talk with your doctor about whether you should stop taking hormones or medicines that cause gynecomastia. Do not stop taking your medicine without talking to your doctor first."
    ],
    [
        "You may have RUNNER’S NIPPLE (also called NIPPLE CHAFING), an irritation that develops when clothes rub against the nipple.",
        "Gently clean the affected area and apply antibiotic ointment. This can help your nipple heal and prevent infection."
    ],
    [
        "You may have a CYST. Cysts are fluid-filled sacs that are usually benign (not cancerous).",
        "See your doctor. He or she will determine if you need any additional tests. If your cyst is painful, your doctor may use a small needle to draw fluid out of it (called aspiration)."
    ],
    [
        "FIBROADENOMAS are benign (not cancerous) breast lumps. Although more common in women, they may also occur in men.",
        "See your doctor. He or she will examine you, review your family history, and determine if you need additional tests."
    ],
    [
        "This may be a sign of something serious, such as BREAST CANCER.",
        ""
    ],
    [
        "These changes may be a sign of something serious, such as BREAST CANCER.",
        "See your doctor as soon as possible."
    ],
    [
        "These changes may be a sign of something serious, such as BREAST CANCER.",
        "See your doctor as soon as possible."
    ],
    [
        "This may be a sign of something serious, such as BREAST CANCER.",
        "See your doctor as soon as possible."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call right away."
    ]
],
[
    [
        "See your doctor right away."
    ],
    [
        "Soon after giving birth, your breasts could become engorged with milk, causing significant swelling and tenderness. If you are breastfeeding, continue to breastfeed and the swelling/tenderness will assume a more predictable pattern based on your baby’s feeding pattern.",
        ""
    ],
    [
        "You may be PREGNANT. Changes in the way your breasts feel, along with fatigue, nausea, and frequent urination are some of the early signs of pregnancy.",
        "Take an at-home pregnancy test. If it’s positive, see your doctor."
    ],
    [
        "This may be linked to PREMENSTRUAL SYNDROME (PMS) or FIBROCYSTIC BREAST DISEASE.",
        "Tell your doctor."
    ],
    [
        "Your symptoms may be caused by FIBROCYSTIC BREAST DISEASE. Many people refer to this as “lumpy-bumpy breasts.” This is a benign (not cancerous) condition that is very common.",
        "See your doctor for an examination. Your doctor may recommend that you avoid fatty foods and caffeine."
    ],
    [
        "Your symptoms may be a result of HORMONAL CHANGES during your menstrual cycle. If you also have irritability, trouble sleeping, and mood changes, you may also have PREMENSTRUAL SYNDROME (PMS).",
        "Over-the-counter medicines may help relieve bloating and tenderness. Ibuprofen, naproxen, or other anti-inflammatory medications may be helpful for painful periods. Avoid caffeine, alcohol, sugary foods, and excess salt. If your symptoms are severe, your doctor may prescribe a medicine to relieve them."
    ],
    [
        "This lump may be a noncancerous GROWTH or CYST, which is a fluid-filled ball.",
        "Carefully check this lump for a month. If it doesn’t go away or it changes, see your doctor. Your doctor may need to take a needle and drain the fluid if it is a cyst."
    ],
    [
        "A painless, firm lump may be a sign of a more serious problem, such as BREAST CANCER.",
        "See your doctor as soon as possible."
    ],
    [
        "Persistent pain and cracking in the nipple with breastfeeding could mean a FUNGAL INFECTION, or it could mean that your baby is not latching properly.",
        "Try a lanolin ointment on your nipple. If it doesn’t help, see your doctor or a lactation consultant. If it is a FUNGAL INFECTION, you and your baby may need to take medication."
    ],
    [
        "These changes may be a sign of a serious problem, such as BREAST CANCER.",
        "See your doctor as soon as possible."
    ],
    [
        "A nonhealing sore on the breast could be a sign of a serious problem, such as BREAST CANCER.",
        "See your doctor as soon as possible."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call right away."
    ]
],
[
    [
        "These symptoms may be caused by BRONCHITIS. A high fever along with a cough and shortness of breath could also be a sign of PNEUMONIA.",
        "If your child has BRONCHITIS, be sure he or she gets lots of rest and drinks plenty of fluids."
    ],
    [
        "These may be symptoms of BRONCHIOLITIS.",
        ""
    ],
    [
        "These symptoms may be caused by PLEURISY, an inflammation of the lining around the lung.",
        "See your doctor. He or she can determine what is causing the PLEURISY. Often, an anti-inflammatory drug will help relieve symptoms. Do not give aspirin to your child. Do not give children 5 years and under cough or cold medicines."
    ],
    [
        "In rare cases, air will leak from a lung to fill the chest cavity. This makes it difficult to breathe. This condition is called a PNEUMOTHORAX.",
        "See your doctor right away or go to the closest emergency room or call an ambulance. Treatment of a PNEUMOTHORAX may require hospitalization."
    ],
    [
        "These may be signs of a serious condition called EPIGLOTTITIS.",
        "Get emergency medical help right away. Go to the closest emergency room or call an ambulance."
    ],
    [
        "This may be caused by COSTOCHONDRITIS, an inflammation of the rib joints in the chest.",
        "Heat and an anti-inflammatory medicine, such as ibuprofen, may help relieve symptoms. Do not give aspirin to your child. See your doctor if the pain is severe or if it doesn’t improve with these medicines."
    ],
    [
        "For more information, please talk to your doctor. If you think your child’s problem is serious, call your doctor right away."
    ]
],
[
    [
        "If the pain is in the center of your chest and feels like something heavy is sitting on your chest, you may be having a HEART ATTACK or MYOCARDIAL INFARCTION.",
        "Go to the closest emergency room or call an ambulance right away."
    ],
    [
        "You likely have a viral infection, which includes the FLU.",
        "If it is within 48-72 hours from the beginning of symptoms, there are medications that your doctor can prescribe if you test positive for, or they suspect the FLU. If it is outside the 48-72-hour window or it is not the flu, then symptomatic treatment (treating cough, headache, sinus congestion, sore throat, etc. can be accomplished with an over-the-counter cough and cold medication). Get plenty of rest and drink plenty of water. Call your doctor if you have a high fever (greater than 101.5°F) or your symptoms persist for more than 5 days."
    ],
    [
        "Your symptoms may be from an infection, such as PNEUMONIA.",
        "PNEUMONIA can be a serious health problem. See your doctor right away or go to the closest emergency room if you are having trouble breathing."
    ],
    [
        "You may have VIRAL BRONCHITIS. Your pain may also be caused by PLEURISY, an irritation of the lining of the lung that is usually caused by a viral infection. Hard coughing may also cause pain in the muscles and chest wall.",
        "Drink plenty of water, and try cough and cold medicines and/or anti-inflammatory medicines to relieve your symptoms. See your doctor if the cough continues for more than a few days or if you develop a fever."
    ],
    [
        "This may be a HEART ATTACK, MYOCARDIAL INFARCTION, or PNEUMONIA.",
        "Go to the closest emergency room or call an ambulance right away."
    ],
    [
        "Your pain may be from an irritation of the stomach called GASTRITIS or an irritation of the esophagus called ESOPHAGITIS. A HIATAL HERNIA (a weakness in the diaphragm) or esophageal spasms may also cause this type of pain and discomfort. Trouble swallowing food (feeling like food gets stuck) is called DYSPHAGIA and should be evaluated.",
        "Try taking an antacid, eat smaller, more frequent, and less spicy meals. See your doctor if the problem persists or if you have DYSPHAGIA."
    ],
    [
        "Your pain may indicate PNEUMOTHORAX, a condition in which air leaks from a lung and fills the chest cavity. This makes it difficult to breathe.",
        "See your doctor right away or go to the closest emergency room. Treatment of PNEUMOTHORAX may require hospitalization."
    ],
    [
        "You may have a serious problem, such as CONGESTIVE HEART FAILURE, ASTHMA, or PULMONARY EDEMA.",
        "See your doctor right away."
    ],
    [
        "These could be symptoms of HYPERVENTILATION, an episode of overbreathing often caused by stress or anxiety. It can also be caused by increased breathing when your body is not getting enough oxygen and you begin to breathe faster.",
        "If you have a heart condition, lung condition, ASTHMA, or if you are experiencing rapid breathing for the first time, go directly to the emergency room."
    ],
    [
        "Your pain may be from a HEART ATTACK or MYOCARDIAL INFARCTION. Similar to men, chest pain is the most common HEART ATTACK symptom in women. However, women are more likely than men to experience the following symptoms (with or without chest pain) when having a heart attack: abdominal pain, feeling lightheaded or dizzy, back or jaw pain, and unexplained fatigue.",
        "Call an ambulance right away or have someone drive you to the closest emergency room."
    ],
    [
        "You may have a viral infection of the nerves and skin called SHINGLES, caused by the varicella zoster virus. This can often occur even if you have received the SHINGLES vaccine.",
        "See your doctor. SHINGLES usually clears on its own, but medication may ease the pain and help prevent complications, such as chronic pain at the site."
    ],
    [
        "Your pain may be from a compressed nerve, possibly from a COMPRESSION FRACTURE, RIB FRACTURE, or a condition known as COSTOCHONDRITIS.",
        "See your doctor. You can take anti-inflammatory medications for COSTOCHONDRITIS."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call right away."
    ]
],
[
    [
        "This may be a HEART ATTACK, MYOCARDIAL INFARCTION, or PNEUMONIA.",
        "Go to the closest emergency room or call an ambulance right away."
    ],
    [
        "Your chest discomfort and shortness of breath may be caused by ASTHMA.",
        "See your doctor right away. Asthma is very treatable, but it can be a serious condition. Make sure that you get your annual influenza vaccination."
    ],
    [
        "You may have COSTOCHONDRITIS, an inflammation of the joints in your chest along the ribs or where the ribs meet your breastbone and sternum.",
        "COSTOCHONDRITIS usually goes away on its own. Try an anti-inflammatory medicine to relieve the pain. Heat may also help. See your doctor if the pain doesn’t get better with these treatments."
    ],
    [
        "Your pain may be from a heart problem called ANGINA. If it occurs under predictable circumstances (e.g., after 10 minutes of hard exercise) then it is considered STABLE ANGINA. If it occurs at different times or seems to be occurring with less exertion or while you are at rest, then it may be UNSTABLE ANGINA.",
        "See your doctor. ANGINA is a sign that a person has a higher risk of serious heart problems, such as a HEART ATTACK. If you are concerned about UNSTABLE ANGINA, and it is actively occurring, have someone drive you to the nearest emergency room or call an ambulance."
    ],
    [
        "The pain you have may be from a GALLBLADDER problem.",
        "See your doctor. Also, avoid fatty foods."
    ],
    [
        "You may have an ULCER, IRRITATION OF THE ESOPHAGUS, or SPASM of the muscles of the esophagus.",
        ""
    ],
    [
        "Your pain may be caused by POSTHERPETIC NEURALGIA, a condition where chronic pain remains at the site of the previous  SHINGLES infection.",
        "See your doctor. In many cases, POSTHERPETIC NEURALGIA can be treated with over-the-counter pain medicines and capsaicin cream."
    ],
    [
        "These symptoms may be caused by CHRONIC BRONCHITIS, which is a type of CHRONIC OBSTRUCTIVE PULMONARY DISEASE (COPD), a common condition if you smoke or previously smoked.",
        "See your doctor. If you smoke, stop smoking. Also, avoid breathing in anything that can irritate your lungs. Make sure that you get your annual influenza vaccination."
    ],
    [
        "EMPHYSEMA, which is a type of CHRONIC OBSTRUCTIVE PULMONARY DISEASE (COPD), may be the cause of your problem.",
        "See your doctor. If you smoke, stop smoking. Also, avoid breathing in anything that can irritate your lungs. Make sure that you get your annual influenza vaccination."
    ],
    [
        "You may have an infectious illness, such as TUBERCULOSIS, FUNGAL INFECTION, or PNEUMONIA. A more serious problem, such as LUNG CANCER, could also be the cause.",
        "See your doctor right away. They may recommend a chest X-ray and/or blood testing. You can take acetaminophen or ibuprofen to help with fever."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call your doctor right away."
    ]
],
[
    [
        "You may have STREP THROAT, an infection caused by bacteria.",
        "See your doctor if your sore throat or fever lasts longer than 48 hours. He or she can do a test to find out if you have strep throat. If you do, your doctor may give you an antibiotic to treat it."
    ],
    [
        "You may have a viral infection, possibly INFLUENZA (also known as the FLU).",
        "If you see your doctor within 48 hours of the start of your symptoms, he or she may prescribe an antiviral medicine to shorten the course of the flu."
    ],
    [
        "You may have ACUTE BRONCHITIS, an inflammation of the airways that is most often caused by a viral infection.",
        "Get plenty of rest and drink lots of fluids. Using a cool-mist humidifier may also relieve some of your symptoms. If you smoke, quitting is the best way to help your airways heal faster."
    ],
    [
        "You may have viral GASTROENTERITIS. Many people call it the STOMACH FLU, but it is not the same as influenza.",
        "Get plenty of rest and stay hydrated. Ease back into eating with bland foods and clear liquids."
    ],
    [
        "You may have ALLERGIC RHINITIS, an allergic reaction to triggers such as tree, grass, or weed pollen; animal dander from cats and dogs; mold; and dust mites.",
        "Try an over-the-counter (OTC) antihistamine medicine or an OTC nasal steroid spray. If your symptoms are getting worse or are hard to control, contact your doctor."
    ],
    [
        "You probably have a viral infection, commonly called a COLD.",
        "Antibiotics do not work against the viruses that cause colds."
    ],
    [
        "You may be developing a viral or bacterial infection called SINUSITIS.",
        "Get plenty of rest and drink lots of water. Over-the-counter (OTC) pain relievers may help reduce facial pain. Holding a warm, wet towel against your face or breathing in steam through a warm cloth or towel can relieve sinus pressure and help open your sinus passages. A cool-mist humidifier may help your sinuses drain more easily."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call right away."
    ]
],
[
    [
        "Your symptoms may be from a serious condition called PULMONARY EDEMA (fluid in the lungs).",
        "Have someone drive you to the nearest emergency room or call an ambulance right away."
    ],
    [
        "You likely have a viral infection, which includes the FLU.",
        "If it is within 48-72 hours from the beginning of symptoms, there are medications that your doctor can prescribe if you test positive for, or they suspect the FLU. If it is outside the 48-72-hour window or it is not the flu, then symptomatic treatment (treating cough, headache, sinus congestion, sore throat, etc. can be accomplished with an over-the-counter cough and cold medication). Get plenty of rest and drink plenty of water. Call your doctor if you have a high fever (>101.5°F) or your symptoms persist for more than 5 days."
    ],
    [
        "You may have an infection of the airways, such as CHRONIC BRONCHITIS. If you have a fever with shaking chills and are very ill, you may have a more serious infection, such as PNEUMONIA.",
        "See your doctor or go to the closest emergency room if you are having trouble breathing. Your doctor can prescribe medicine to relieve your symptoms. Get plenty of rest, and drink lots of fluids. If you smoke, stop smoking."
    ],
    [
        "These symptoms may be a sign of ASTHMA, a closure or restriction of the airways.",
        "Asthma can be dangerous and should be diagnosed and treated by your doctor. Make sure that you get your annual influenza vaccination. If you feel that you can’t catch your breath or can’t stop coughing, then have someone drive you to the closest emergency room or call an ambulance."
    ],
    [
        "Persistent coughing can be caused by CONGESTIVE HEART FAILURE, especially when there is a buildup of fluid in the lungs, as well as in the legs, feet, and/or ankles.",
        "See your doctor."
    ],
    [
        "Bloody mucus with these symptoms may mean that a blood clot has moved from your leg to your lungs. This is called PULMONARY EMBOLISM. You may also have developed an infection called PNEUMONIA.",
        "Have someone drive you to the closest emergency room or call an ambulance."
    ],
    [
        "These symptoms may be caused by TUBERCULOSIS or another type of infection.",
        "Have someone drive you to the closest emergency room or call an ambulance."
    ],
    [
        "This may be a sign of a serious illness, such as LUNG CANCER. Other signs of lung cancer may include a cough that produces bloody sputum, shortness of breath and wheezing.",
        "See your doctor right away."
    ],
    [
        "Irritation of the airways will cause coughing to attempt to clear the object or irritation out of the airway.",
        "If you smoke, stop smoking. If the coughing is severe or if you don’t believe the irritant has been cleared from your airway, see your doctor or go to the emergency room right away."
    ],
    [
        "This is known as CHRONIC COUGH. The three most common causes are UPPER AIRWAY COUGH SYNDROME, ASTHMA, and ACID REFLUX.",
        "UPPER AIRWAY COUGH SYNDROME is usually due to environmental exposures, such as ALLERGIC RHINITIS. This can be caused by triggers like pollen, weeds, cat/dog dander, mold, dust, etc. Treat with antihistamines and see your doctor. for consideration of an inhaled nasal steroid and potentially allergy shots."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call your doctor right away."
    ]
],
[
    [
        "You may have GASTROENTERITIS (stomach flu).",
        "Drink plenty of water, eat a bland diet (smaller, more frequent meals that include non-spicy foods) and see your doctor if you develop and find blood or mucous in your diarrhea or vomit."
    ],
    [
        "Your diarrhea may be a side effect or adverse reaction caused by the medicine.",
        "Talk to your doctor about the antibiotic or medicine you’re taking. He or she may be able to prescribe a medicine that won’t cause diarrhea. However, don’t stop taking your current medicine unless your doctor tells you."
    ],
    [
        "Your symptoms may be caused by LACTOSE INTOLERANCE. People who have this condition have trouble digesting the sugar in milk and other dairy products.",
        "If you think you have LACTOSE INTOLERANCE, talk to your doctor. Your doctor may recommend taking lactase enzyme tablets or drops to help prevent problems. Also, avoid eating or drinking foods and beverages that make you sick."
    ],
    [
        "You may have FOOD POISONING. Other symptoms of FOOD POISONING may include headache, fever, chills, and weakness.",
        "Most problems caused by FOOD POISONING will clear up within 12-48 hours. In the meantime, drink plenty of fluids to avoid dehydration. Children should be given an oral rehydration solution (ORS). Avoid solid foods until the diarrhea goes away. A simple way to make a home-based ORS is to boil a cup of white rice until the rice has completely overcooked and split and the water is cloudy. Keep the water and throw out the mushy rice. The water replaces the electrolytes lost in diarrhea."
    ],
    [
        "You may have TRAVELER’S DIARRHEA, which is caused by contaminated food or drink.",
        "Over-the-counter medicines may help relieve your symptoms. Drink plenty of fluids, but avoid alcohol, caffeine, and dairy products. If your symptoms persist or if you have blood or mucous in your diarrhea, call your doctor."
    ],
    [
        "You may have a condition that affects the intestines, such as DIVERTICULOSIS or DIVERTICULITIS.",
        "See your doctor. A diet high in FIBER and water may help relieve your symptoms."
    ],
    [
        "You may have GASTROENTERITIS (stomach flu).",
        "Get plenty of rest. Children who have GASTROENTERITIS should be given an oral rehydration solution (ORS) to prevent dehydration. A simple way to make a home-based ORS is to boil a cup of white rice until the rice has completely overcooked and split and the water is cloudy. Keep the water and throw out the mushy rice. The water replaces the electrolytes lost in diarrhea."
    ],
    [
        "You may have a form of BACTERIAL DIARRHEA or a parasite (GIARDIA).",
        "Call your doctor promptly. Be sure to drink plenty of fluids to prevent dehydration. Avoid caffeine."
    ],
    [
        "You may have GALLBLADDER DISEASE, a perforated ULCER PANCREATITIS.",
        "Call your doctor promptly."
    ],
    [
        "These could be symptoms of a problem such as an INTESTINAL OBSTRUCTION or blockage.",
        "See your doctor right away, or go to the nearest emergency room."
    ],
    [
        "MALABSORPTION problems, such as CELIAC DISEASE, can cause food-related diarrhea. Food sensitivities can also cause similar symptoms.",
        "Avoid the foods that make you sick, and discuss the problem with your doctor. Keep a food diary (writing down what and when you eat and when symptoms develop) to help determine patterns or triggers for your symptoms."
    ],
    [
        "You may have INFLAMMATORY BOWEL DISEASE or CROHN’S DISEASE.",
        "See your doctor. He or she will determine what treatment is right for you. Drink plenty of fluids, and avoid foods that make your symptoms worse."
    ],
    [
        "IRRITABLE BOWEL SYNDROME or SPASTIC COLON may be the cause of your DIARRHEA.",
        "Gradually increase the amount of fiber in your diet if constipation is the main issue, and drink plenty of fluids. If you see blood in your stools, call your doctor."
    ],
    [
        "You may have a FECAL IMPACTION, a large mass of dry, hard stool that is trapped in the rectum.",
        "See your doctor."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call your doctor right away."
    ]
],
[
    [
        "You may have OTITIS MEDIA, an infection of the middle ear.",
        "See your doctor. Many ear infections will safely clear up on their own, but others require antibiotics."
    ],
    [
        "Your ear canal, outer ear, and the skin around your ear may be seriously infected.",
        "See your doctor right away."
    ],
    [
        "Your pain may be from MASTOIDITIS, an infection of the bone just behind the ear, or from an ENLARGED LYMPH NODE.",
        "See your doctor right away."
    ],
    [
        "You may have a RUPTURED EARDRUM.",
        "See your doctor. Avoid infection by keeping your ear dry while it’s healing. Putting a warm heating pad on your ear may help relieve the pain."
    ],
    [
        "Your pain may be caused by OTITIS EXTERNA, an infection of the ear canal that is also called SWIMMER’S EAR.",
        "See your doctor. Keep your ear dry while it’s healing. Putting a warm heating pad over your ear may help relieve the pain."
    ],
    [
        "The source of your pain may be TEMPOROMANDIBULAR JOINT (TMJ) SYNDROME, a disorder that affects the jaw joint.",
        "Try an anti-inflammatory medicine. Try massaging the sore muscles around your jaw. Moist heat or cold packs may also help relieve the pain."
    ],
    [
        "Your ear discomfort may be caused by a BLOCKED EUSTACHIAN TUBE. Colds and the flu often lead to this condition.",
        "Try an over-the-counter decongestant medicine for a few days. Putting a warm heating pad on your ear may help relieve the pain. Do not children 5 years and under cough or cold medicines."
    ],
    [
        "A tooth problem can radiate/send pain to the ear on the same side.",
        "Try a mild over-the-counter pain reliever, and see your dentist."
    ],
    [
        "You may have BAROTRAUMA, also called AIRPLANE EAR, which is caused by changes in altitude and air pressure.",
        "If your symptoms don’t improve in a few hours or if the pain is severe, see your doctor."
    ],
    [
        "A small INFECTION or LOCAL INFLAMMATION in the ear canal may be the cause.",
        "The infection/inflammation will probably go away by itself in 2 to 5 days. A mild pain reliever and warm compress may help relieve the pain."
    ],
    [
        "This may be caused by a buildup of fluid (SEROUS OTITIS) or a buildup of wax in the ear canal (CERUMINOSIS or CERUMEN IMPACTION).",
        "Talk to your doctor. He or she can tell you how to treat the wax or fluid buildup."
    ],
    [
        "This is likely a buildup of wax in the ear canal (CERUMINOSIS or CERUMEN IMPACTION).",
        "You can put 3-5 drops of warm water or 1 part warm water and 1 part white vinegar into your ear canal once per day to soften the wax. After 2-5 minutes, turn your head and lightly tug on your ear to discharge the drops. Do not insert cotton swabs into the ear canal."
    ],
    [
        "This is known as CAULIFLOWER EAR and is a collection of fluid that occurs after direct trauma to the ear.",
        "Wearing appropriately sized ear protection during all practices, sparring, and bouts will prevent CAULIFLOWER EAR. If it develops, you can immediately have it drained and then compressed to reduce the chance that the fluid hardens and the changes become permanent."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call your doctor right away."
    ]
],
[
    [
        "You may have CONSTIPATION, or developed HEMORRHOIDS or an ANAL FISSURE.",
        "Increase the fiber and water intake in your daily diet. If this does not improve your symptoms, or if the pain is sharp and/or continuous, is associated with blood on the stool or in the toilet bowl, see your doctor. You can also consider over-the-counter hemorrhoid wipes or creams."
    ],
    [
        "The blood may be from internal HEMORRHOIDS. Internal HEMORRHOIDS usually don’t cause any discomfort. RECTAL CANCER is another possibility, especially if you’re over 40 years. Other signs of RECTAL CANCER may include changes in the shape of your stools (pencil-like diameter).",
        "See your doctor. HEMORRHOIDS are often treated with over-the-counter creams or suppositories. Soaking in warm water may also help relieve any discomfort. Your doctor will likely consider imaging if he/she is concerned about CANCER."
    ],
    [
        "CONSTIPATION can cause these symptoms.",
        "Add more fiber to your diet, and drink lots of water. Over-the-counter bulk-forming laxatives may also help relieve constipation. Check the side effect lists on any medicines you are taking to see if they could be causing CONSTIPATION."
    ],
    [
        "You may have a PERIRECTAL ABSCESS, an infected area near the anus.",
        "See your doctor."
    ],
    [
        "You may have HEMORRHOIDS.",
        "See your doctor, especially if you notice blood in your stool or in the toilet bowl after bowel movements. You can also consider over-the-counter hemorrhoid wipes or creams."
    ],
    [
        "You may have a RECTAL PROLAPSE. People who have this condition may feel like they can’t completely empty their bowels. They may also pass very small stools or be unable to control their bowel movements.",
        "See your doctor."
    ],
    [
        "You may have HEMORRHOIDS. If the lump is painful to the touch or throbbing in nature, it may be a THROMBOSED HEMORRHOID.",
        "For general HEMORRHOIDS use an over-the-counter hemorrhoidal cream or suppository and soaking the area in warm water may help relieve the pain and itching. If there’s no improvement in 1 to 2 weeks, or if the bleeding continues, see your doctor."
    ],
    [
        "Rectal itching may be a sign of a YEAST INFECTION, ALLERGY to specific products in toilet paper, or PINWORMS (especially if itching is only present in the morning).",
        "Nonprescription, antifungal medications are for a YEAST INFECTION and antiparasitic medications are for PINWORMS. If you think an allergy is your problem, try using white, unscented toilet paper. See your doctor if your symptoms don’t improve."
    ],
    [
        "You may have a BLOCKAGE in or near your gallbladder, or you may have LIVER DISEASE or an infection like HEPATITIS.",
        "See your doctor right away."
    ],
    [
        "CONSTIPATION, along with overuse of laxatives can cause dependence on them.",
        "Avoid using laxatives. Instead, try adding more fiber to your diet, and drink lots of water. Keep in mind that it isn’t necessary to have a bowel movement every day. A normal range is 3 times a day to 2 times a week."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call your doctor right away."
    ]
],
[
    [
        "DIARRHEA is often caused by a gastrointestinal infection, but it can also be caused by other illnesses or something your child eats. Diarrhea can be harmful to children if it leads to dehydration.",
        "Encourage your child (older than 2 years) to drink water and other clear fluids. Ask your doctor about giving your baby or toddler an oral rehydration solution (ORS). A simple way to make a home-based ORS is to boil a cup of white rice until the rice has completely overcooked and split and the water is cloudy. Keep the water and throw out the mushy rice. The water replaces the electrolytes lost in diarrhea."
    ],
    [
        "Hard, pellet-like stools or urine accidents (INCONTINENCE) may be signs of CONSTIPATION.",
        ""
    ],
    [
        "Keep a food diary to determine patters or food triggers for the symptoms. Eliminate foods that make your child sick. Talk to your doctor about treating your child’s intolerance of milk and dairy products with lactose enzyme. Soy formula may be an appropriate substitute for infants who have lactose intolerance. Talk with your doctor about other food substitutes if needed. The goal is always for your infant/child to have a well-balanced diet.",
        "Eliminate foods that make your child sick from his or her diet. Talk to your doctor about treating your child’s intolerance of milk and dairy products with lactose enzyme. Soy formula may be an appropriate substitute for infants who have lactose intolerance."
    ],
    [
        "Pain from HEMORRHOIDS or an ANAL FISSURE can cause a child to hold a bowel movement for many days. Children can also hold their bowel movements when they are potty training due to stress and the need to control something in their life.",
        "Encourage frequent toileting. Provide support and positive reinforcement. Give them opportunities to make choices and have “control” of their potty training."
    ],
    [
        "For more information, please talk to your doctor. If you think your child’s problem is serious, call your doctor right away."
    ]
]
    ,
[
    [
        "You may have a serious and urgent problem, such as a DETACHED RETINA.",
        "Call your eye doctor right away. Go to the closest emergency room or call an ambulance."
    ],
    [
        "Your symptoms may be from ACUTE GLAUCOMA, a condition caused by a rise in eye pressure that can cause permanent vision damage or blindness.",
        "If you have these symptoms, call your doctor right away or go to the closest emergency room or call an ambulance."
    ],
    [
        "Your symptoms may be a sign of a serious inflammatory condition called TEMPORAL ARTERITIS.",
        "See your doctor right away."
    ],
    [
        "SINUSITIS (a viral or bacterial  infection of the sinuses) may be the cause of your pain.",
        "Take a cold or sinus medicine, and drink plenty of fluids. Warm facial compresses may also help relieve the pain. If your symptoms don’t improve within 10 days, or if you have constant fever or severe pain, or your symptoms improve and then worsen again, see your doctor as soon as possible. Do not give children 5 years and under cough or cold medicines."
    ],
    [
        "You may have an inflammation inside the eye called IRITIS.",
        "See your doctor or an eye specialist right away."
    ],
    [
        "Over time, too much glucose (sugar) in the blood can cause eye problems and damage.",
        "Tell your doctor about the vision changes you have experienced. He or she can give you advice on preventing eye problems. You should also make sure that you are getting a dilated eye exam at least once per year."
    ],
    [
        "Your symptoms may be from an ALLERGY or an INSECT BITE.",
        "Use a cool compress and take an antihistamine to relieve discomfort. See your doctor if the swelling doesn’t get better or if you have a fever."
    ],
    [
        "These may be signs of a serious eye infection called PERIORBITAL CELLULITIS.",
        "See your doctor right away."
    ],
    [
        "You may have either a CHALAZION (in the eyelid), HORDEOLUM, or STYE (on the eyelid edge).",
        "A stye usually heals in 5-7 days. To relieve the pain, apply a warm compress to the area for 10-15 minutes, 4 times a day, and take mild pain relievers. Microwaving a potato and wrapping it in a cloth will provide a longer term warm compress. If the bump grows or doesn’t go away, see your doctor. If the redness spreads or swells quickly, or if you develop fever, seek medical attention promptly."
    ],
    [
        "This sensation may be from a SCRATCHED CORNEA or from a small particle (foreign body) under the eyelid.",
        "Rinse your eye with clean water or saline solution. You can also flush your eye under the faucet. If the sensation doesn’t go away, see your doctor as soon as possible."
    ],
    [
        "CONJUNCTIVITIS (also called PINK EYE) can be caused by an allergy, virus, bacteria, or fungus. If it is one-sided, it is more likely to be bacterial.",
        "BACTERIAL CONJUNCTIVITIS is very contagious, so avoid contact with the eye and wash your hands often. Try over-the-counter eyedrops and apply a warm compress to relieve any discomfort. Remove your contacts and do not wear them until the inflammation has cleared."
    ],
    [
        "This chronic irritation is called BLEPHARITIS, and it is a similar process to dandruff/flaking of the scalp.",
        "Apply a warm compress and wash your eye gently with an eyewash and washcloth. You can also apply an over-the-counter anti-dandruff shampoo (very small amount) just before you shower/bathe and then wash it off after 5-10 minutes. If the problem doesn’t resolve, see your doctor."
    ],
    [
        "You may have an irritation from contact lens overuse or a more serious eye condition, such as an INFECTION, CORNEAL ABRASION, or a scratch caused by your contact lens.",
        "Remove your contact lenses and let your eyes rest for a while. If the redness or irritation doesn’t go away, see your eye care professional."
    ],
    [
        "For more information, please talk to your doctor. If you think your problem is serious, call your doctor right away."
    ]
]
]

// module.exports = { symptoms, que, causes }