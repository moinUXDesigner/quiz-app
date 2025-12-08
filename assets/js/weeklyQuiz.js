    // ---------- Week 1 Questions ----------
export const questions1 = [
    {
        q: "Health psychology has been recognized within the American Psychological Association as-",
        options: ["Division 38", "Division 36", "Division 43", "Division 48"],
        // correct a: Division 38
        a: 0
    },
    {
        q: "Emotion is accompanied by physiological changes- This finding was put forward by",
        options: ["Franz", "Dunbar", "Freud", "Cannon"],
        // correct a: Cannon
        a: 3
    },
    {
        q: "One of these is currently not an area of activity for health psychology-",
        options: ["Prevention of illness", "Prescription of medicines", "Treatment of illness", "Promotion of health"],
        // correct a: Prescription of medicines
        a: 1
    },
// =================================================================================================
  {
    type: "match",
    q: "Match List I with List II",
    list1: [
      "A. Experimental method",
      "B. Surveys",
      "C. Case series",
      "D. Naturalistic observation"
    ],
    list2: [
      "I. Mostly preferred for measuring attitudes",
      "II. Cause and effect relationship",
      "III. No interference of the researcher",
      "IV. Triangulation"
    ],
    options: [
            "A- III, B- IV, C- II, D- I",
            "A- III, B- I, C- IV, D- II",
            "A- III, B- IV, C- I, D- II",
            "A- II, B- I, C- IV, D- III"
        ],
        // correct mapping: A- II (experimental => cause & effect), B- I (surveys=> attitudes), C- IV (case series => triangulation), D- III (naturalistic => no interference)
    a: 3

  },
  // =================================================================================================

    // {
    //     q: `Match List I with List II\n\nList I:\nA. Experimental method\nB. Surveys\nC. Case series\nD. Naturalistic observation\n\nList II:\nI. Mostly preferred for measuring attitudes\nII. Cause and effect relationship\nIII. No interference of the researcher\nIV. Triangulation`,
    //     options: [
    //         "A- III, B- IV, C- II, D- I",
    //         "A- III, B- I, C- IV, D- II",
    //         "A- III, B- IV, C- I, D- II",
    //         "A- II, B- I, C- IV, D- III"
    //     ],
    //     // correct mapping: A- II (experimental => cause & effect), B- I (surveys=> attitudes), C- IV (case series => triangulation), D- III (naturalistic => no interference)
    //     a: 3
    // },
    {
        q: "In the development of physical disease symptoms, Sigmund Freud’s emphasized on the role of",
        options: ["Unconscious physical factors", "Unconscious psychological factors", "Conscious psychological factors", "Conscious physical factors"],
        // correct: Unconscious psychological factors
        a: 1
    },
    {
        q: "Psychological processes can complicate diagnostic procedures. This statement is-",
        options: ["Partly False", "True", "Partly True", "False"],
        // correct: True
        a: 1
    },
    {
        q: "Identify which of the following statement is False. Behavioral health emphasizes more on",
        options: ["The prevention of disease", "The enhancement of health", "Adoption of healthy lifestyles", "Better hospital care"],
        // correct: Better hospital care (behavioral health is more public health / prevention oriented)
        a: 3
    },
    {
        q: "The patient receives less information and plays less of a role in decision-making in the case of-",
        options: ["The Patient -centered approach", "The Doctor-centered approach", "The Psychiatrist-centered approach", "The Family-centered approach"],
        // correct: The Doctor-centered approach
        a: 1
    },
    {
        q: "Epidemiological methods are more likely to be used by",
        options: ["Educational Psychologists", "Social Psychologists", "Health Psychologists", "Industrial Psychologists"],
        // correct: Health Psychologists
        a: 2
    },
    {
        q: "Physicians supporting the psychosomatic approach call for an acceptance of the",
        options: ["Psychosocial model", "Biopsychosocial model", "Biosocial model", "Biomedical model"],
        // correct: Biopsychosocial model
        a: 1
    }
];
// ---------- Week 2 Questions ----------
export const questions2 = [
    {
        // type: "match",
        // q: "Match List I with List II \n\nA. Health belief model \nB. Protection motivation theory \nC. Theory of reasoned action \nD. Theory of planned behaviour \n\nList II: \nI. Coping appraisal \nII. Perceived behavioural control \nIII. Perceived threat \nIV. Attitude & subjective norms",
        type: "match",
        q: "Match List I with List II",
        list1: [
            "A. Health belief model",
            "B. Protection motivation theory",
            "C. Theory of reasoned action",
            "D. Theory of planned behaviour"
        ],
        list2: [
            "I. Coping appraisal",
            "II. Perceived behavioural control",
            "III. Perceived threat",
            "IV. Attitude & subjective norms"
        ],
        options: [
            "A- III, B- I, C- IV, D- II",
            "A- IV, B- II, C- I, D- III",
            "A- I, B- III, C- II, D- IV",
            "A- II, B- I, C- III, D- IV"
        ],                
        a: 0 // Correct: A-III, B-I, C-IV, D-II
    },
    {
        q: "Health is ______________ in nature.",
        options: ["Multi-factorial", "Multi-sectorial", "Multi-dimensional", "Multi-cultural"],
        a: 2 // Multi-dimensional
    },
    {
        q: "Which of the following theory supports the statement “While the physical and social environment shapes behaviour, people are not passive in the process, since they in turn can change their environments, creating a reciprocal dynamic”?",
        options: ["Social learning theory", "Health belief model", "Theory of reasoned action", "Protection motivation theory"],
        a: 0 // Social learning theory
    },
    {
        q: "Which of the following theory includes coping appraisal and threat appraisal?",
        options: ["Health belief model", "Social learning theory", "Theory of reasoned action", "Protection motivation theory"],
        a: 3 // Protection motivation theory
    },
    {
        q: "Medical students' disease is best described by which of the following?",
        options: [
            "Believing that you might have the symptoms of each disease that one studies.",
            "It is not contagious",
            "A disease that only occurs to medical students because they are around sick people all day.",
            "Can occur in anyone who studies about illnesses because all that studying makes everyone ill."
        ],
        a: 0 // Believing they have every disease they study
    },
    {
        q: "The existence of feedback loops contributes to Leventhal's model being referred to as______.",
        options: ["Self-monitoring", "Self-regulatory", "Self-reporting", "Self-perceiving"],
        a: 1 // Self-regulatory
    },
    {
        q: "Which of the following terms best describes an individual who express distress and conflict through bodily symptoms?",
        options: ["Natural healers", "Pessimist", "Somaticizers", "Worried well"],
        a: 2 // Somaticizers
    },
    {
        q: "Identify four categories offered by Lalonde which are helpful in tracking any health problem?",
        options: [
            "Environment, Lifestyle, Health care organisation and Economy of the country.",
            "Human biology, Mental health, Hygiene practices and Lifestyle.",
            "Mental health, Health care organization, economy of the country & Lifestyle.",
            "Human biology, Environment, Lifestyle and Health care organisation."
        ],
        a: 3 // Human biology, Environment, Lifestyle, Health care organisation
    },
    {
        q: "The epidemiological triangle portrays the interaction between__",
        options: ["Individual, host and environment", "Agent, individual and host", "Agent, host and environment", "Individual, disease and environment"],
        a: 2 // Agent, host and environment
    },
    {
        q: "What are the five consistent themes of 'illness representations' as identified by Leventhal?",
        options: [
            "Identity, consequences, coping, timeline, and curability/controllability",
            "Identity, consequences, cause, coping, and curability/controllability",
            "Identity, consequences, cause, timeline, and curability/controllability",
            "Identity, coping, cause, timeline, and curability/controllability"
        ],
        a: 2 // Identity, consequences, cause, timeline, curability/controllability
    }
];
// ---------- Week 3 Questions ----------
export const questions3 = [
    {
        q: "_________ provides an active learning environment for audiences and encourages the exploration of social attitudes towards particular health issues.",
        options: ["Mass media appeal", "Appeal by physicians", "Theatrical performances", "Radio"],
        a: 2 // Theatrical performances
    },
    {
        q: "Brownell et al., stated that in order to really succeed at long-term maintenance and control, an individual must become aware of his/her own potentially ______ and learn to use self-instructions that are compatible with success.",
        options: ["Encouraging positive thoughts", "Supportive member of the family or friends", "Damaging negative self-statements", "Destructive behaviors"],
        a: 2 // Damaging negative self-statements
    },
    // ====================================================CHECK============================================
    {
        type: "alphalist",
        q: "Which of the following statements is False regarding self-regulatory model of illness cognition?",
        list1: [
            "A. This model is developed by Leventhal.", 
            "B. It suggests that illness is dealt by individuals in the same way as other problems.",
            "C. This model has three stages.", 
            "D. Its major assumption is that the role individual with illness is passive."
        ],
        
        options: ["D only", "C & D only", "A & B only", "B only"],
        a: 0 // D only
    },
    // ================================================================================================
    {
        q: "Which of the following is Not an example of Approach coping?",
        options: ["Resting", "Denial of illness", "Taking medicines", "Visiting doctor"],
        a: 1 // Denial of illness
    },
    {
        q: "Which theory proposes that reinforcement and observation of others' behaviour causes change in the behaviour?",
        options: ["Cognitive Social Learning", "Transtheoretical Model", "Social Action", "Health Belief Model"],
        a: 0 // Cognitive Social Learning
    },
    {
        q: "Identify the three stages of Leventhal’s self-regulatory model of illness cognition from below:",
        options: ["Involvement, appraisal & change in behaviour", "Interpretation, coping & appraisal", "Knowing, altering beliefs and coping", "Acquiring information, interpretation & change in behaviour"],
        a: 1 // Interpretation, coping & appraisal
    },
    {
        q: "Operant behaviour that is rewarded or reinforced by the individual or by the environment is more likely to be _________________",
        options: ["Reduce gradually", "Relapse", "Repeat", "Fluctuate"],
        a: 2 // Repeat
    },
    {
        q: "Assertion A: Central arguments require an analytically motivated audience.\nReason R: Peripheral route persuasion is not analytical and requires less effort on the part of the audience.",
        options: [
            "A is not correct but R is correct",
            "A is correct but R is not correct",
            "Both A and R are correct but R is NOT the correct explanation of A",
            "Both A and R are correct and R is the correct explanation of A"
        ],
        a: 2 // Both A and R are correct but R is NOT the correct explanation of A
    },
    {
        q: "____________ are useful tools for forming mental constructs that simplify or render familiar a concept that the individual is attempting to understand.",
        options: ["Analogies", "Life skills", "Mass media appeals", "Puppetry"],
        a: 0 // Analogies
    },
    {
        q: "Behavioural Intention =",
        options: [
            "Control beliefs + Will power",
            "Normative belief + Persuasion",
            "Attitude + Persuasion",
            "Attitude + Subjective norms"
        ],
        a: 3 // Attitude + Subjective norms
    }
];
// ---------- Week 4 Questions ----------
export const questions4 = [
    {
        type: "match",
        q: "Match List I with List II",
        list1: ["A. Eustress", "B. Distress", "C. Catastrophes", "Major Life Events"],
        list2: ["I. Negative stress", "II. Stress caused by death of a loved one", "III. Positive stress", "IV. Unpredictable stressor such as war"],
        options: [
            "A- III , B- I , C- IV , D- II",
            "A- III, B- IV, C- II, D- I",
            "A- IV, B- III, C- I, D- II",
            "A- I, B- IV, C- II, D- III"
        ],
        a: 0 // A-III, B-I, C-IV, D-II
    },
    {
        q: "Vasopressin and oxytocin are hormones secreted by the",
        options: ["Anterior pituitary gland", "Posterior pituitary gland", "Pineal gland", "Thymus gland"],
        a: 1 // Posterior pituitary gland
    },
    {
        q: "According to General Adaptation Syndrome model, at which stage ‘disease of adaptation’ takes place?",
        options: ["Exhaustion stage", "Resistance stage", "Crises stage", "Alarm stage"],
        a: 1 // Resistance stage
    },
    {
        q: "Selye’s General Adaptation Syndrome is known as a-",
        options: [
            "Transactional Model of Stress",
            "Interactional Model of Stress",
            "Psychological Model of Stress",
            "Biological Model of Stress"
        ],
        a: 3 // Biological Model of Stress
    },
    {
        q: "Which of the following is Not an alternative medicine for alcohol abuse?",
        options: ["Acupuncture", "Yoga", "Meditation", "Injected medication"],
        a: 3 // Injected medication
    },
    {
        q: "The Perceived Stress Scale does NOT assess one of these-",
        options: ["Daily hassles", "Changes in state anxiety", "Changes in coping resources", "Major events"],
        a: 1 // Changes in state anxiety
    },
    {
        q: "Adrenocorticotropic hormone (ACTH) is a hormone secreted by the-",
        options: ["Thymus gland", "Thyroid gland", "Adrenal gland", "Pituitary gland"],
        a: 3 // Pituitary gland
    },
    {
        q: "The activation of this system is responsible for restoring physiological balance after a stress response-",
        options: [
            "The Autonomic Nervous System",
            "The Parasympathetic Nervous System",
            "The Sympathetic Nervous System",
            "The Peripheral Nervous System"
        ],
        a: 1 // Parasympathetic Nervous System
    },
    {
        q: "Individuals who begin drinking at _____ age are at a higher risk of problem drinking or physical dependence on alcohol.",
        options: ["A later", "A late", "A middle", "An early"],
        a: 3 // An early
    },
    {
        q: "The level of secretion of catecholamines is a ___________",
        options: ["Biochemical Measure of stress", "Psychological Measure of stress", "Psychosocial Measure of stress", "Physiological Measure of stress"],
        a: 0 // Biochemical Measure of stress
    }
];
// ---------- Week 5 Questions ----------
export const quizQuestions5 = [
    {
        q: "The influence of chronic stress on gastric functioning causes-",
        options: [
            "Increased production of gastric acid",
            "Increased production of cortisol",
            "Reduced production of gastric acid",
            "Increased sympathetic activity"
        ],
        a: 0 // Increased production of gastric acid
    },
    {
        q: "Assertion A: Emotional factors especially chronic stress can influence the functioning of the stomach.\nReason R: The stress response involves release of cortisol and glucocorticoids which can act as causative as also aggravating factors for peptic ulcerations.",
        options: [
            "Both A and R are correct and R is the correct explanation of A",
            "Both A and R are correct but R is NOT the correct explanation of A",
            "A is correct but R is not correct",
            "A is not correct but R is correct"
        ],
        a: 0
    },
    {
        q: "Focussing on the arrangement of a clinical setting, rather than the pain during a medical procedure is an example of which of the following cognitive control technique?",
        options: [
            "Thought stopping",
            "Thought avoidance",
            "Informational control",
            "Cognitive restructuring"
        ],
        a: 3 // Cognitive restructuring
    },
    {
        q: "A moderate ambition and drive are characteristics of –",
        options: [
            "Type B personality",
            "Type D personality",
            "Type C personality",
            "Type A personality"
        ],
        a: 0 // Type B personality
    },
    {
        q: "The two themes of perfectionism are ____________ and _____________",
        options: [
            "Perfectionist striving; Perfectionist concern",
            "Third-person perfectionism; Socially prescribed perfectionism",
            "Self-oriented perfectionism; Perfectionist concern",
            "Other-oriented perfectionism; Perfectionist striving"
        ],
        a: 0
    },
    {
        q: "Residual coping occurs ________",
        options: [
            "Just before the stressful event",
            "Long before the stressful event",
            "Just after the stressful event",
            "Long after the stressful event"
        ],
        a: 3 // Long after the stressful event
    },
    {
        q: "Expressing pent-up feelings in the company of family and friends is an example of ______",
        options: [
            "Problem-focused coping",
            "Avoidance coping",
            "Expressive coping",
            "Emotion-focused coping"
        ],
        a: 3 // Emotion-focused coping
    },
    {
        q: "Those possessing _____________ tend to see a stressful situation as beyond their control.",
        options: [
            "An external locus of control",
            "Prior experience",
            "Internal locus of control",
            "High self-efficacy"
        ],
        a: 0
    },
    {
        q: "Statement I: Type A people are emotional, achievement oriented, competitive, time conscious, perfectionist and are always functioning above their physiological baseline.\n\nStatement II: Type D individuals are often worried without specific reasons, have a pessimistic perspective, often feel depressed and irritated, and rarely experience positive feelings.",
        options: [
            "Statement I is correct but Statement II is incorrect",
            "Both Statement I and Statement II are incorrect",
            "Both Statement I and Statement II are correct",
            "Statement I is incorrect but Statement II is correct"
        ],
        a: 2
    },
    {
        q: "One of these is not a part of the Big Five model of personality _____",
        options: [
            "Conscientiousness",
            "Extraversion",
            "Psychoticism",
            "Neuroticism"
        ],
        a: 2 // Psychoticism
    }
];
// ---------- Week 6 Questions ----------
export const quizQuestions6 = [
    {
        q: "Which of the following is Not one of the three stages of stress inoculation?",
        options: [
            "Skill Acquisition and Rehearsal",
            "Relaxation",
            "Conceptualization",
            "Application and Follow-through"
        ],
        a: 1
    },
    {
        q: "Confused thinking is associated with",
        options: [
            "Delirium",
            "Schizophrenia",
            "Eating disorder",
            "Both a and c"
        ],
        a: 3 // Both a and c
    },
    {
        q: "This phase occurs between the phases of ‘medical care contact’ and ‘dependent patient role’",
        options: [
            "Sick-role phase",
            "Chronic phase",
            "Acute phase",
            "Validation phase"
        ],
        a: 2 // Acute phase
    },
    {
        q: "Functional measurements of social support analyze",
        options: [
            "The interdependence of social contacts",
            "The tasks undertaken by social networks",
            "The number of social contacts",
            "The interlinkages between social networks"
        ],
        a: 1
    },
    {
        q: "Illness is more often associated with –",
        options: [
            "Positive outcomes",
            "Long-term outcomes",
            "Negative outcomes",
            "Chronic outcomes"
        ],
        a: 2
    },
    {
        q: "________ helps an individual gain information about changes in biological responses as they are taking place.",
        options: [
            "Progressive muscle relaxation technique",
            "Mindfulness meditation",
            "Stress inoculation technique",
            "Biofeedback"
        ],
        a: 3
    },
    {
        q: "This form of social support is most important for alleviating geriatric depression",
        options: [
            "Informational Social Support",
            "Procedural Social Support",
            "Tangible Social Support",
            "Emotional Social Support"
        ],
        a: 3
    },
    {
        q: "The physical and psychological symptoms of disease may act as causative factors for each other. This statement is",
        options: [
            "False",
            "Partly false",
            "Partly true",
            "True"
        ],
        a: 3
    },
    {
        q: "Edward Suchman proposed",
        options: [
            "Four stages of illness",
            "Five stages of illness",
            "Six stages of illness",
            "Seven stages of illness"
        ],
        a: 1
    },
    {
        q: "Assertion A: Biofeedback is used as stress management technique.\nReason R: Electromyography-produced electrical activity allows the individual to alter physiological responses.",
        options: [
            "A is correct but R is not correct",
            "Both A and R are correct but R is NOT the correct explanation of A",
            "A is not correct but R is correct",
            "Both A and R are correct and R is the correct explanation of A"
        ],
        a: 1
    }
];
// ---------- Week 7 Questions ----------
export const quizQuestions7 = [
    {
        q: "Which of the following would be a characteristic of a chronic illness?",
        options: [
            "Requires short term surveillance",
            "Reversible pathology",
            "Slow, progressive decline",
            "Cure likely"
        ],
        a: 2
    },
    {
        q: "The delay between the making of an appointment with the doctor and actually receiving medical care is –",
        options: [
            "Utilization delay",
            "Illness delay",
            "Appraisal delay",
            "Medical delay"
        ],
        a: 3
    },
    {
        q: "Accuracy in symptom perception is –",
        options: [
            "A multi-dimensional construct",
            "A three-dimensional construct",
            "A two-dimensional construct",
            "A unidimensional construct"
        ],
        a: 0
    },
    {
        q: "During the breaking of the bad news the time pressure affects ____",
        options: [
            "All the above",
            "The Family Members",
            "The Patient",
            "The Physician"
        ],
        a: 0
    },
    {
        q: "The outcomes of conveying the bad news to the patient depend on ________",
        options: [
            "Multiple variables",
            "Three variables",
            "Two variables",
            "One variable"
        ],
        a: 0
    },
    {
        q: "Type A individuals are more likely to report symptoms when –",
        options: [
            "Engaged in a task",
            "Regulating a task",
            "Just before a task",
            "Not engaged in a task"
        ],
        a: 3
    },
    {
        q: "Rita who is suffering from diabetes is busy in the preparations for her sister’s wedding. She is ______",
        options: [
            "More likely to notice the symptoms",
            "More likely to exaggerate the symptoms",
            "Both a and c.",
            "Less likely to notice the symptoms"
        ],
        a: 3
    },
    {
        q: "A fear of being wrong and looking silly if the symptom is trivial, is less, when the individual –",
        options: [
            "has to depend on others for medical aid",
            "has to disturb others during night-time",
            "has to apply for leave on a busy day",
            "can seek medical help independently"
        ],
        a: 3
    },
    {
        type: "alphalist",
        q: "Given below are two statements: In the light of the statements, choose the most appropriate answer from the options:",
        list1: ["Statement I: SPIKES is a six-step protocol which is used by the clinicians to share bad news with the patients.", "Statement II: ABCDE is a stepwise model which makes the process of breaking the bad news more systematic and easier."],
        options: [
            "Both Statement I and Statement II are correct",
            "Statement I is incorrect but Statement II is correct",
            "Both Statement I and Statement II are incorrect",
            "Statement I is correct but Statement II is incorrect"
        ],
        a: 2
    },
    {
        q: "A condition that interferes with daily functioning for more than 3 months in a year, causes hospitalization of more than 1 month in a year, or is likely to do either of these is termed as:",
        options: [
            "Handicap",
            "Chronic Illness",
            "Lifetime Impairment",
            "Disability"
        ],
        a: 1
    }
];
// ---------- Week 8 Questions ----------
export const quizQuestions8 = [
    {
        q: "Support groups may be initiated by-",
        options: [
            "The Therapist",
            "Neither a or b",
            "The Patient",
            "Either a or b"
        ],
        a: 3
    },
    {
        q: "Rehabilitation professionals who help patients relearn daily routines or prepare for employment are referred as _____",
        options: [
            "Dieticians",
            "Occupational Therapists",
            "Physiotherapists",
            "Speech Therapists"
        ],
        a: 1
    },
    {
        type: "alphalist",
        q: "Given below are two statements: In the light of the statements, choose the most appropriate answer from the options:",
        list1: ["Statement I: In most cultures, women are found to be more engaged in reproductive labour as compared to productive labour.", "Statement II: While the biological consequences of illness are similar for men and women, the social demands and implications of these consequences make the illness experience far worse for women as compared to men."],
        options: [
            "Statement I is incorrect but Statement II is correct",
            "Both Statement I and Statement II are incorrect",
            "Statement I is correct but Statement II is incorrect",
            "Both Statement I and Statement II are correct"
        ],
        a: 3
    },
    {
        q: "Steps to promote adherence in chronically ill patients may include-",
        options: [
            "Patient Punishment",
            "Cognitive and behavioral interventions",
            "Both a and b",
            "Patient Education"
        ],
        a: 2 // Both a and b
    },
    {
        q: "When the chronically ill child expresses his/her emotions, it is most important to ___",
        options: [
            "Guide",
            "Listen",
            "Advice",
            "Counter"
        ],
        a: 1
    },
    {
        q: "Children express their feelings only verbally. This statement is-",
        options: [
            "True",
            "False",
            "Partly False",
            "Partly True"
        ],
        a: 1
    },
    {
        q: "Which of these statements do not apply to gender? Identify",
        options: [
            "It is a relative concept",
            "It is a social construct",
            "It is a biological construct",
            "It is a dynamic concept"
        ],
        a: 2
    },
    {
        q: "Longevity research indicates that across cultures-",
        options: [
            "Both have equal lifespan",
            "Neither of the above",
            "Men outlive women",
            "Women outlive men"
        ],
        a: 3
    },
    {
        q: "Evaluation of psychological aspects should form a-",
        options: [
            "Auxiliary part of Chronic Care",
            "Standard part of Chronic Care",
            "Separate part of Chronic Care",
            "Intermittent part of Chronic Care"
        ],
        a: 1
    },
    {
        type: "alphalist",
        q: "Which of the following helps child cope with chronic illness? Choose the correct answer using the options given below:",
        list1: ["A) Talk openly and honestly with the child", "B) Encourage the child to continue everyday activities", "C) Recognize and respond to the emotional impact of the illness", "D) Providing whatever child asks for without conditions"],
        options: [
            "B & D",
            "A, B & C",
            "A, C & D",
            "C & D"
        ],
        a: 1
    }
];

// ---------- Week 9 Questions ----------
export const quizQuestions9 = [
    {
        q: "Arthritis does not affect this area of the body:",
        options: [
            "Small joints",
            "Knees",
            "Wrists",
            "Stomach"
        ],
        a: 3
    },
    {
        q: "Fractures become more common in old age due to-",
        options: [
            "Loss in bone density",
            "Increase in bone size",
            "Both b and c",
            "Increase in Muscle mass"
        ],
        a: 0
    },
    {
        q: "What is not right about Alzheimer’s disease?",
        options: [
            "depression",
            "impairment of language and comprehension",
            "good abstract thinking and judgement levels",
            "impairment of memory and attention"
        ],
        a: 2
    },
    {
        q: "What is not true about Alzheimer’s disease?",
        options: [
            "There is memory loss and other intellectual abilities to weaken",
            "It is a common form of dementia",
            "This condition is generally seen in people who are 65 years and older",
            "The condition is a normal part of aging"
        ],
        a: 3
    },
    {
        q: "In _______ the stiffness is worse after rest, such as the first thing in the morning, and often lasts at least 30 minutes or more.",
        options: [
            "Chronic fatigue syndrome",
            "Diabetes",
            "Alzheimer’s disease",
            "Rheumatoid Arthritis"
        ],
        a: 3
    },
    {
        q: "One of these does not constitute a healthy lifestyle change for the elderly. Identify.",
        options: [
            "Smoking cessation",
            "Reduced alcohol intake",
            "Taking over the counter drugs",
            "Regular doctor visits"
        ],
        a: 2
    },
    {
        q: "Which of the following stage symptoms of Alzheimer’s are mistaken for being caused due to stress or ageing?",
        options: [
            "Early stage",
            "Pre-dementia",
            "Advanced",
            "Moderate"
        ],
        a: 1
    },
    {
        q: "An appropriate teaching measure for the patient with diabetes mellitus related to care of the feet is to ________",
        options: [
            "Avoid softening lotions and creams",
            "Use heat to increase blood supply",
            "Use iodine to disinfect cuts and abrasions",
            "Inspect all surfaces of the feet daily"
        ],
        a: 3
    },
    {
        q: "The nurse assists the patient with nutritional therapy of diabetes with the knowledge that a “diabetic diet” is designed",
        options: [
            "For use during periods of high stress",
            "To help normalize blood glucose through a balanced diet",
            "To normalize blood glucose by elimination of sugar",
            "To be used only for type 1 diabetes"
        ],
        a: 1
    },
    {
        q: "______ has the tendency to affect the larger weight bearing joints:",
        options: [
            "Chronic fatigue syndrome",
            "Diabetes Mellitus",
            "Rheumatoid Arthritis",
            "Osteoarthritis"
        ],
        a: 3
    }
];

// ---------- Week 10 Questions ----------
export const quizQuestions10 = [
    {
        q: "Which of these is not a treatment option for Cancer?",
        options: ["Relaxation techniques", "Chemo therapy", "Surgery", "Radiation"],
        a: 0
    },
    {
        q: "Pain can be described in terms of 3 components. They are____",
        options: [
            "Sensory, psychological, and cognitive",
            "Sensory, motivational, and cognitive",
            "Sensory, perceptive, and cognitive",
            "Sensory, motivational, and perceptive"
        ],
        a: 1
    },
    {
        q: "Ancient Greeks believed that pain was associated with ___",
        options: ["Mummies", "Death", "Sin", "Pleasure"],
        a: 3
    },
    {
        q: "Which of these is not a treatment option for Cancer?",
        options: ["Surgery", "Radiation", "Relaxation techniques", "Chemo therapy"],
        a: 2
    },
    {
        q: "A patient has primary lung cancer. Which of the following is the least likely carcinogen responsible?",
        options: ["Radon gas", "Tobacco smoke", "UV radiation", "Asbestos"],
        a: 2
    },
    {
        q: "Which theory proposed that there is no separate system for perceiving pain?",
        options: ["Gate Control Theory", "Specificity theory", "Pattern theory", "Pathophysiology of acute pain theory"],
        a: 2
    },
    {
        q: "Clinicians and researchers have found that a few individuals are more prone to coronary heart disease due to their personality make-up. These individuals are termed as:",
        options: ["Type D individuals", "Type C individuals", "Type B individuals", "Type A individuals"],
        a: 3
    },
    {
        q: "The Type D personality is very frequently termed to as ____________ personality.",
        options: ["Disturbed", "Difficult", "Distressed", "Dangerous"],
        a: 2
    },
    {
        q: "Chronic pain sometimes persists despite the fact that the",
        options: ["Person is sleeping", "Patient took medicines", "Acute pain is there", "Injury has healed"],
        a: 3
    },
    {
        q: "Which fibers create a hypothetical gate that can open and close?",
        options: ["Spinal cord fibers", "Small fibers", "Large fibers", "Brain fibers"],
        a: 2
    }
];

// ---------- Week 11 Questions ----------
export const quizQuestions11 = [
    {
        q: "Hospice care is limited to the last",
        options: ["Visit to the hospital", "1 1⁄2 years of life", "6 months of life", "2 years of life"],
        a: 2
    },
    {
        q: "Palliative care is a form of medical treatment focused on _____",
        options: ["complete treatment without relapse", "providing a cure", "not doing any intervention", "Slowing the disease's progress"],
        a: 3
    },
    {
        q: "Pharmacological drugs for treatment of pain do not include",
        options: ["Opioid drugs", "Adjuvant drugs", "Hallucinogens", "Non-opioid drugs"],
        a: 2
    },
    {
        q: "Five Powers to face the thought of death is put forth by ______",
        options: ["Christians", "Hindus", "Jews", "Buddhists"],
        a: 3
    },
    {
        q: "In which method one is connected to electrical sensors that help receive information about the body?",
        options: ["Hypnotherapy", "Biofeedback", "Psychotherapy", "Massage"],
        a: 1
    },
    {
        q: "There are ______types of dying trajectories?",
        options: ["Six", "Two", "One", "Three"],
        a: 3
    },
    {
        q: "Systematic desensitization technique results in _____",
        options: ["Increases anxiety", "Reduces lifestyle diseases", "Helps for learning disabilities", "Overcome fear of death"],
        a: 3
    },
    {
        q: "“If I’m allowed to live, I promise....” represents which stage of death, according to Kubler-Ross?",
        options: ["Promise stage", "Denial stage", "Bargaining stage", "Depression stage"],
        a: 2
    },
    {
        q: "In which of the following methods, nerve transmission to an area is blocked through injection of an agent",
        options: ["Neural Blockade", "Biofeedback", "Surgical lesions", "Neuropathy"],
        a: 0
    },
    {
        q: "The last stage of dying according to Ross is",
        options: ["Depression", "Acceptance", "Denial", "Bargaining"],
        a: 1
    }
];

// ---------- Week 12 Questions ----------
export const quizQuestions12 = [
    {
        q: "The emotional response to that loss of a loved one is",
        options: ["Bereavement", "Grief", "Trauma", "Loss"],
        a: 1
    },
    {
        q: "The outward expression of that grief, which may include cultural and religious customs surrounding death is",
        options: ["Grief", "Obituary", "Mourning", "Bereavement"],
        a: 2
    },
    {
        q: "Given below are two statements:\n\nAssertion A: Studies show that children go through a series of stages in their understanding of death.\nReason R: Preschool children usually see death as reversible, temporary, and impersonal.\n\nIn the light of the above statements, choose the most appropriate answer from the options",
        options: [
            "A is correct but R is not correct",
            "A is not correct but R is correct",
            "Both A and R are correct but R is NOT the correct explanation of A",
            "Both A and R are correct and R is the correct explanation of A"
        ],
        a: 3
    },
    {
        q: "In the acronym SIMPLE, S stands for _______",
        options: ["Suggesting the regimen", "Specifying the regimen", "Supportive to the patient", "Simplify the regimen"],
        a: 3
    },
    {
        q: "When children question 'Why did they die?' Parents should say",
        options: ["The person is very good", "God took the person to Him", "The person is very bad", "The person's body couldn't fight the sickness any more"],
        a: 3
    },
    {
        q: "The SIMPLE strategy is practiced by the ________",
        options: ["Practitioner", "Family members of the patient", "Pharmacist", "Patient"],
        a: 0
    },
    {
        q: "Which of the following is a compliant behaviour?",
        options: ["Taking medication", "Self-medication", "Smoking", "Maintaining under weight"],
        a: 0
    },
    {
        q: "Which of the following measures of compliance is objective by nature?",
        options: ["Asking practitioner", "Asking others", "Monitoring medicine usage", "Asking patient"],
        a: 2
    },
    {
        q: "Acknowledgment of the objective fact that one has experienced a death is",
        options: ["Trauma", "Bereavement", "Grief", "Loss"],
        a: 1
    },
    {
        q: "Between the ages of 5 and 9, most children are beginning to realize that death is",
        options: ["Temporary", "Unrealistic", "Reversible", "Final"],
        a: 3
    }
];

// ---------- Week 13 Questions ----------
export const quizQuestions13 = [
    {
        q: "The patient’s belief that the treatment will have negative effect, even if the Medication given is completely inert is termed as:",
        options: ["Side effect", "Nocebo effect", "Placebo effect", "Both a & c"],
        a: 1
    },
    {
        q: "Which of the following is one of the central concepts in operationalizing the construct of patient centeredness?",
        options: ["Patient involvement in the decision making and planning of treatment", "Medical outcomes cannot be understood by a layperson", "Professional discussions and not discussions with patients contribute to treatment decisions", "Treatment decisions need not involve patients concerns"],
        a: 0
    },
    {
        q: "In their hypothetico-deductive model of problem solving, Newell and Simon differentiated between two types of plans:",
        options: ["Diagnosis and clinical correlation", "Problem statement and strategic planning", "Heuristics and algorithms", "Logic and technology"],
        a: 2
    },
    {
        q: "The most important information should be given early or late in the flow of information to maximize ____________________, and its importance should be emphasized.",
        options: ["Primacy and recency effect", "Information effects", "Channels of interaction", "Communication effect"],
        a: 0
    },
    {
        q: "Who experimented on placebo treatment during World War II ?",
        options: ["John Hayghart", "Saraphino", "Henry Beecher", "Wright"],
        a: 2
    },
    {
        q: "_________ can be used to help individuals deal with their feelings or to reflect on these feelings, whereas ___________ enables individuals to learn how the process or the intervention will actually be done.",
        options: [
            "Coping skills information; Behavioural instructions",
            "Sensory information; Procedural information",
            "Procedural information; Coping skills information",
            "Behavioural instructions; Sensory information"
        ],
        a: 1
    },
    {
        q: "The _______________ suggested that patients’ beliefs are important and emphasized the patient’s locus of control, perceived social support and the disruption of lifestyle involved in adherence.",
        options: ["Adherence model", "Information model", "Layman’s model", "Communication model"],
        a: 0
    },
    {
        q: "An inert substance with no active medical properties is called",
        options: ["Surgery", "Saline solution", "Morphine", "Paracetamol"],
        a: 1
    },
    {
        q: "Most meetings between health professionals and patients are time-limited and consequently ____________ play a central role in developing and testing a hypothesis and reaching a management decision.",
        options: ["Communication", "Adherence", "Compliance", "Stereotypes"],
        a: 3
    },
    {
        q: "What is it called when both the experimenter and the subject are unaware of a particular placebo treatment?",
        options: ["Uncontrolled clinical trial", "Conditioning effect", "Double blind trial", "Randomized clinical trial"],
        a: 2
    }
];