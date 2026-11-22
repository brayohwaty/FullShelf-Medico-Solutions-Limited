/*
  PRODUCT DATA
  To add a product, copy one block below, paste it at the end of the PRODUCTS
  list, and change the values. The site builds the cards from this list.
  "category" must match one of the ids in CATEGORIES.
*/

const CATEGORIES = [
  { id: "mobility", name: "Mobility & rehabilitation", home: true, image: "images/categories/mobility.jpg", icon: '<circle cx="10" cy="16" r="5"/><path d="M10 4v8h6l3 6"/>' },
  { id: "diagnostics", name: "Clinical diagnostics & monitoring", home: true, image: "images/categories/diagnostics.jpg", icon: '<path d="M3 12h4l2-6 4 12 2-6h6"/>' },
  { id: "respiratory", name: "Respiratory & anaesthesia", home: true, image: "images/categories/respiratory.jpg", icon: '<path d="M12 4v8M12 12c-1 3-3 5-6 5-1.5 0-2-1-2-2 0-3 2-8 4-9M12 12c1 3 3 5 6 5 1.5 0 2-1 2-2 0-3-2-8-4-9"/>' },
  { id: "wound-care", name: "Wound care & dressings", home: true, image: "images/categories/wound-care.jpg", icon: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>' },
  { id: "furniture", name: "Hospital furniture & patient care", home: true, image: "images/categories/hospital-furniture.jpg", icon: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.5"/>' },
  { id: "imaging", name: "Medical imaging & radiology", home: true, image: "images/categories/imaging.jpg", icon: '<path d="M4 4h16v16H4zM8 8h8v8H8zM2 12h2m16 0h2"/>' },
  { id: "dialysis", name: "Dialysis & renal care", home: true, image: "images/categories/dialysis-renal.jpg", icon: '<path d="M7 3v5a5 5 0 0 0 10 0V3M7 8H4v5a8 8 0 0 0 16 0V8h-3M12 13v7"/>' },
  { id: "critical-care", name: "ICU, critical care & emergency", home: true, image: "images/categories/icu-critical-care.jpg", icon: '<path d="M3 12h4l2-6 4 12 2-6h6"/><path d="M4 4h16v16H4z"/>' },
  { id: "theatre", name: "Surgical & operating theatre", home: true, image: "images/categories/operating-theatre.jpg", icon: '<path d="M6 3v6m-3-3h6M14 4l6 16M11 20l5-16M4 20h16"/>' },
  { id: "medical-consumables", name: "Medical consumables & disposables", home: true, image: "images/categories/medical-consumables.jpg", icon: '<path d="M7 3h10v18H7zM9 7h6M9 11h6M9 15h6"/>' },
  { id: "reagents", name: "Laboratory reagents & test kits", home: true, image: "images/categories/reagents.jpg", icon: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 15h8"/>' },
  { id: "laboratory", name: "Laboratory equipment & supplies", home: true, image: "images/categories/laboratory.jpg", icon: '<path d="M9 3h6M10 3v6l-4 9a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-9V3M8 15h8"/>' },
  { id: "infection-prevention", name: "Infection prevention & PPE", home: true, image: "images/categories/ppe-infection-control.jpg", icon: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>' },
  { id: "sterilization", name: "Sterilization & CSSD", home: true, image: "images/categories/sterilization-cssd.jpg", icon: '<path d="M4 6h16v14H4zM8 3v3m8-3v3M8 11h8m-8 4h8"/>' },
  { id: "maternity", name: "Maternity & neonatal care", home: true, image: "images/categories/maternity-neonatal.jpg", icon: '<path d="M12 21s-8-4.5-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6.5-8 11-8 11z"/>' },
  { id: "dental", name: "Dental equipment & supplies", home: true, image: "images/categories/dental.jpg", icon: '<path d="M7 3c-3 0-4 3-3 7l2 9c.5 2 2 2 3 0l2-5c.5-1 1.5-1 2 0l2 5c1 2 2.5 2 3 0l2-9c1-4 0-7-3-7-2 0-3 1-5 1S9 3 7 3z"/>' },
  { id: "physiotherapy", name: "Physiotherapy & rehabilitation", home: true, image: "images/categories/physiotherapy.jpg", icon: '<path d="M4 18h16M6 18V9m12 9V9M6 9h12M9 5l3-2 3 2"/>' },
  { id: "medical-gases", name: "Medical gas & suction systems", home: true, image: "images/categories/medical-gases.jpg", icon: '<path d="M12 3v18M5 8h14M5 16h14M8 5l-3 3 3 3m8-6 3 3-3 3"/>' },
  { id: "pharmacy-supplies", name: "Pharmacy & medication-handling supplies", home: true, image: "images/categories/pharmacy-supplies.jpg", icon: '<path d="M4 6h16v14H4zM8 3h8v3H8zM8 11h8m-8 4h5"/>' }
];

const PRODUCTS = [
  {
    id: 1,
    name: "Foldable wheelchair, standard",
    category: "mobility",
    description: "Steel frame, padded armrests, and removable footrests. Folds flat for transport.",
    featured: true
  },
  {
    id: 2,
    name: "Adjustable walking frame",
    category: "mobility",
    description: "Lightweight aluminium frame with height adjustment and non-slip rubber feet.",
    featured: false
  },
  {
    id: 3,
    name: "Underarm crutches (pair)",
    category: "mobility",
    description: "Height-adjustable aluminium crutches with padded grips and tips.",
    featured: false
  },
  {
    id: 37,
    name: "Walking frame without castors, pediatric",
    category: "mobility",
    description: "Lightweight height-adjustable aluminium walking frame with rubber-tipped legs and padded hand grips, in a child-size design, to support children learning to walk or recovering from injury.",
    featured: false
  },
  {
    id: 38,
    name: "Walking stick with seat",
    category: "mobility",
    description: "Lightweight foldable walking stick that opens into a seat, with a padded handle and a rubber tip, for resting when out and about.",
    featured: false
  },
  {
    id: 39,
    name: "Foldable walking stick",
    category: "mobility",
    description: "Lightweight black aluminium walking stick that folds into sections, with a height-adjustable shaft, a curved handle, a wrist strap and a non-slip rubber tip.",
    featured: false
  },
  {
    id: 40,
    name: "Foldable Shower chair with commode",
    category: "mobility",
    description: "Aluminium wheelchair with a padded commode seat and removable bucket, padded backrest, armrests, swing-away footrests and push handles, for patients who need to use the toilet without leaving the chair.",
    featured: false
  },
  {
    id: 41,
    name: "Adjustable commode",
    category: "mobility",
    description: "Folding steel commode chair with a lidded seat and removable bucket, padded armrests, a tubular backrest and four castors with brakes, for patients who need a toilet seat at the bedside.",
    featured: false
  },
  {
    id: 42,
    name: "Electric wheelchair",
    category: "mobility",
    description: "Compact battery-powered wheelchair with a joystick controller, padded seat and backrest, armrests, a footplate and four wheels, for users who can't or don't want to propel a manual chair.",
    featured: false
  },
  {
    id: 43,
    name: "Folding electric wheelchair",
    category: "mobility",
    description: "Battery-powered folding wheelchair with a joystick controller, orange padded seat and backrest, armrests, a calf strap, swing-away footrests, rear push handles and rear motor wheels.",
    featured: false
  },
  {
    id: 44,
    name: "Reclining electric wheelchair",
    category: "mobility",
    description: "Battery-powered wheelchair with a reclining backrest and padded headrest, a joystick controller, a black padded seat, footrests and rear motor wheels, on a red and black frame.",
    featured: false
  },
  {
    id: 45,
    name: "Four-wheel rollator with seat",
    category: "mobility",
    description: "Lightweight folding rollator with four wheels, a padded seat and backrest strap, hand brakes, a storage basket and height-adjustable handles, for walking support and resting.",
    featured: false
  },
  {
    id: 4,
    name: "Digital infrared thermometer",
    category: "diagnostics",
    description: "Non-contact forehead reading in about one second, with fever alert.",
    featured: true
  },
  {
    id: 5,
    name: "Automatic blood pressure monitor",
    category: "diagnostics",
    description: "Upper-arm cuff, large display, and memory for the last 60 readings.",
    featured: true
  },
  {
    id: 6,
    name: "Glucometer starter kit",
    category: "diagnostics",
    description: "Meter, lancing device, lancets, and 25 test strips.",
    featured: false
  },
  {
    id: 46,
    name: "Littmann class II stethoscope",
    category: "diagnostics",
    description: "Littmann Classic II stethoscope with a two-sided chestpiece, single-tube design and soft-sealing eartips, for listening to heart, lung and body sounds in adult and pediatric patients.",
    featured: true
  },
   {
    id: 47,
    name: "E.N.T diagnostic set",
    category: "diagnostics",
    description: "Set with an otoscope, ear specula, a nasal speculum and a tongue depressor, in a carry case, for examining the ears, nose and throat.",
    featured: true
  },
   {
    id: 48,
    name: "Patient monitor",
    category: "diagnostics",
    image: "images/products/patient-monitor.jpg",
    description: "Bedside monitor with a colour display for continuous monitoring of vital signs, with audible and visual alarms.",
    featured: true
  },
  {
    id: 7,
    name: "Fingertip pulse oximeter",
    category: "respiratory",
    description: "Reads SpO2 and pulse rate on an OLED screen. Runs on two AAA batteries.",
    featured: true
  },
  {
    id: 8,
    name: "Oxygen concentrator, 5 litre",
    category: "respiratory",
    description: "Continuous flow up to 5 L/min for home use. Quiet operation.",
    featured: false
  },
  {
    id: 9,
    name: "Compressor nebulizer",
    category: "respiratory",
    description: "Delivers medication as a fine mist. Includes adult and child masks.",
    featured: false
  },
  {
    id: 10,
    name: "Sterile gauze swabs (pack of 100)",
    category: "wound-care",
    description: "Individually wrapped, 10 x 10 cm, 8-ply cotton gauze.",
    featured: false
  },
  {
    id: 11,
    name: "First aid kit, clinic grade",
    category: "wound-care",
    description: "Wall-mountable case with dressings, bandages, antiseptic, and gloves.",
    featured: false
  },
  {
    id: 12,
    name: "Manual hospital bed, 2-crank",
    category: "furniture",
    description: "Height and backrest adjustment, with side rails and lockable castors.",
    featured: true
  },
  {
    id: 13,
    name: "Manual hospital bed, 3-crank",
    category: "furniture",
    description: "Height, backrest and knee-rest adjustment, with side rails and lockable castors.",
    featured: true
  },
  {
    id: 14,
    name: "Electric hospital bed, 3-crank",
    category: "furniture",
    description: "Height, backrest and knee-rest adjustment, with side rails and lockable castors.",
    featured: true
  },
  {
    id: 15,
    name: "Dressing Trolley, Two shelf",
    category: "furniture",
    description: "Stainless steel trolley with two shelves and lockable castors, for carrying dressings and instruments.",
    featured: true
  },
  {
    id: 16,
    name: "Emergency trolley (crash cart)",
    category: "furniture",
    description: "Multi-drawer trolley with lockable castors, for storing and moving emergency drugs and resuscitation equipment.",
    featured: true
  },
  {
    id: 17,
    name: "Bedside locker",
    category: "furniture",
    description: "Compact locker with a cupboard and drawer for patient belongings, with lockable castors.",
    featured: true
  },
  {
    id: 18,
    name: "Examination couch",
    category: "furniture",
    description: "Padded couch with adjustable backrest for patient examination, with a washable vinyl surface.",
    featured: true
  },
  {
    id: 19,
    name: "Double stepper stool",
    category: "furniture",
    description: "Two-step stool with non-slip rubber treads, for patients to step up onto beds and examination couches.",
    featured: true
  },
  {
    id: 20,
    name: "Shower stool",
    category: "furniture",
    description: "Lightweight stool with a non-slip seat and rubber feet, for sitting safely while showering.",
    featured: true
  },
  {
    id: 21,
    name: "Ward screen, 3-fold",
    category: "furniture",
    description: "Three-panel folding screen on a steel frame, for giving patients privacy in wards and examination rooms.",
    featured: true
  },
  {
    id: 22,
    name: "Linen trolley",
    category: "furniture",
    description: "Trolley with a removable canvas bag on a steel frame and castors, for collecting and moving soiled or clean linen.",
    featured: true
  },
  {
    id: 23,
    name: "Tripod Stand",
    category: "furniture",
    description: "Height-adjustable stainless steel stand on a three-legged base, with hooks for hanging IV fluid bags.",
    featured: true
  },
  {
    id: 24,
    name: "Emergency stretcher, ABS",
    category: "furniture",
    description: "Wheeled emergency stretcher with a washable ABS plastic top, adjustable backrest and side rails, for moving patients quickly.",
    featured: true
  },
  {
    id: 25,
    name: "Electric delivery bed",
    category: "furniture",
    description: "Motorised obstetric bed with a hand-held remote for height, backrest and leg-section adjustment, side rails and lockable castors.",
    featured: true
  },
  {
    id: 26,
    name: "Doctor's stool with back rest",
    category: "furniture",
    description: "Height-adjustable swivel stool with a padded, washable vinyl seat, curved backrest and gas-lift lever, on a five-star base with castors.",
    featured: true
  },
  {
    id: 27,
    name: "Hospital segmented mattress with mackintosh",
    category: "furniture",
    description: "Foam mattress made in separate sections to fit adjustable hospital beds, with a waterproof, wipe-clean mackintosh cover.",
    featured: true
  },
  {
    id: 28,
    name: "Tube ripple mattress",
    category: "furniture",
    description: "Alternating pressure mattress with inflatable air tubes and an electric pump, to help prevent and treat pressure sores in bedridden patients.",
    featured: true
  },
  {
    id: 29,
    name: "Instruments tray",
    category: "furniture",
    description: "Stainless steel tray with raised edges, for holding surgical and dental instruments during procedures.",
    featured: true
  },
  {
    id: 30,
    name: "Electric massage bed",
    category: "furniture",
    description: "Padded treatment bed with electric height adjustment and a hand-held controller, with a washable cover, for massage and physiotherapy.",
    featured: true
  },
  {
    id: 31,
    name: "Hydraulic delivery bed",
    category: "furniture",
    description: "Padded delivery bed with stainless steel base, adjustable sections, leg supports with stirrups and a hand-wheel for height adjustment.",
    featured: true
  },
  {
    id: 32,
    name: "Waiting bench, 3-seater, padded",
    category: "furniture",
    description: "Three-seat linked waiting bench with padded seats and backrests, on a sturdy steel frame, for hospital and clinic waiting areas.",
    featured: true
  },
  {
    id: 33,
    name: "Operating table",
    category: "furniture",
    description: "Multi-section operating table with black padded top, stainless steel column base, adjustable head, back and leg sections, and side rails with accessory fittings.",
    featured: true
  },
  {
    id: 34,
    name: "Electric Hospital bed, 5-function",
    category: "furniture",
    description: "Motorised bed with hand-held remote for backrest, knee-rest, height, and forward and backward tilt adjustment, ABS head and foot boards, four-piece ABS side rails, a blue padded mattress and lockable castors.",
    featured: true
  },
  {
    id: 35,
    name: "Electric hospital bed, 3-function",
    category: "furniture",
    description: "Motorised bed with hand-held remote for height, backrest and knee-rest adjustment, ABS head and foot boards, four-piece ABS side rails, a blue padded mattress and lockable castors.",
    featured: true
  }
  ,
  { id: 49, name: "Haemodialysis machine", category: "dialysis",
    image: "https://freseniusmedicalcare.com/content/dam/fresenius-medical-care/global/en/04_media/images/multimedia/products/csm_FME_5008S_dialysis_machine_75681f55c9.png", imageFallback: "images/products/haemodialysis-machine.jpg", description: "Renal-care equipment for haemodialysis services. Machine configuration, water-treatment requirements, accessories and availability confirmed on enquiry.", featured: true },
  { id: 50, name: "Reverse osmosis water-treatment system", category: "dialysis", description: "Water-treatment solutions for dialysis units, specified to the facility's capacity and water-quality requirements. Confirmed by project assessment." },
  { id: 51, name: "Dialysis chairs, beds & treatment accessories", category: "dialysis", description: "Patient seating, treatment furniture and supporting accessories for renal-care units. Options sourced to specification." },
  { id: 52, name: "Ultrasound imaging system", category: "imaging",
    image: "https://s7d9.scene7.com/is/image/gehealthcare/switcher-essential-desktop?fmt=webp", imageFallback: "images/products/ultrasound-machine.jpg", description: "General, obstetric, cardiac and point-of-care ultrasound configurations. Probe selection, software and availability confirmed on enquiry.", featured: true },
  { id: 53, name: "Digital X-ray system", category: "imaging",
    image: "images/products/xray.jpg", description: "Fixed and mobile digital radiography solutions, including detector and workstation configurations, sourced to project requirements." },
  { id: 54, name: "Mobile C-arm imaging system", category: "imaging",
    image: "images/products/c-arm.jpg", description: "Mobile fluoroscopy imaging systems for theatre and procedural settings. Configuration and installation requirements assessed per project." },
  { id: 55, name: "ICU ventilator", category: "critical-care",
    image: "https://www.draeger.com/Media/Content/Products/Slideshow/D-3636-2019.jpg", imageFallback: "images/products/ventilator.jpg", description: "Ventilation systems for critical-care and high-dependency settings. Patient range, modes, accessories and service requirements confirmed on enquiry.", featured: true },
  { id: 56, name: "Defibrillator & resuscitation equipment", category: "critical-care", description: "Defibrillation and emergency response equipment, with compatible pads, batteries and accessories sourced to specification." },
  { id: 57, name: "Infusion & syringe pumps", category: "critical-care",
    image: "images/products/infusion-pump.jpg", description: "Volumetric infusion and syringe pump options for wards, theatres and critical-care areas. Models and accessories confirmed on enquiry." },
  { id: 58, name: "Anaesthesia workstation", category: "theatre", description: "Anaesthesia delivery workstations and compatible breathing circuits, monitors and accessories, specified for the theatre." },
  { id: 59, name: "LED operating-theatre light", category: "theatre",
    image: "images/products/surgical-light.jpg", description: "Single- and dual-dome surgical lighting options, including ceiling-mounted and mobile configurations." },
  { id: 60, name: "Electrosurgical unit", category: "theatre", description: "Electrosurgical generators and compatible handpieces, electrodes and accessories for surgical procedures." },
  { id: 61, name: "Surgical instrument sets", category: "theatre", description: "General, specialty and procedure-specific instrument sets, sourced to requested composition and material specification." },
  { id: 62, name: "Clinical chemistry analyser", category: "laboratory", description: "Clinical chemistry analyser options, from compact bench-top to higher-throughput systems. Reagent compatibility and throughput confirmed on enquiry." },
  { id: 63, name: "Haematology analyser", category: "laboratory", description: "Automated haematology analysers and compatible reagents, controls and consumables for laboratory workflows." },
  { id: 64, name: "Laboratory centrifuge", category: "laboratory",
    image: "images/products/laboratory-centrifuge.jpg", description: "Bench-top and high-speed centrifuge options, with rotor and tube configurations matched to laboratory use." },
  { id: 65, name: "Laboratory microscope", category: "laboratory", description: "Clinical and educational microscopy options, including binocular and trinocular configurations and accessories." },
  { id: 66, name: "Laboratory autoclave", category: "sterilization",
    image: "images/products/autoclave.jpg", description: "Steam sterilizers for laboratory, clinical and CSSD settings. Chamber size, cycle requirements and installation confirmed on enquiry." },
  { id: 67, name: "Clinical chemistry reagents", category: "reagents", image: "https://content-academy.siemens-healthineers.com/CMS/Images/e3be94f4-74e0-a7d5-e3b0-26e9f781cac1.jpg", imageFallback: "images/products/laboratory-reagents.jpg", description: "Routine and specialty chemistry reagents, calibrators and controls. Compatibility with analyser model and pack size confirmed before supply.", featured: true },
  { id: 68, name: "Haematology reagents & controls", category: "reagents", description: "Haematology diluents, lyse reagents, cleaners, calibrators and quality-control materials matched to analyser requirements." },
  { id: 69, name: "Coagulation reagents", category: "reagents", description: "Reagents and controls for PT, APTT and other coagulation testing, subject to instrument compatibility and availability." },
  { id: 70, name: "Rapid diagnostic test kits", category: "reagents", description: "Rapid test kits and associated controls for selected clinical testing needs. Test type, registration and availability confirmed on enquiry." },
  { id: 71, name: "Examination gloves & personal protective equipment", category: "medical-consumables", description: "Examination and procedure gloves, masks, gowns, aprons, caps, shoe covers and other PPE options." },
  { id: 72, name: "Syringes & hypodermic needles", category: "medical-consumables", description: "Single-use syringes and needles in a range of sizes and pack configurations, subject to availability." },
  { id: 73, name: "IV cannulas & infusion sets", category: "medical-consumables", description: "Peripheral IV cannulas, giving sets, extension lines, connectors and related infusion disposables." },
  { id: 74, name: "Catheters, drainage bags & tubing", category: "medical-consumables", description: "Urinary and other clinical catheter options, drainage bags, tubing and compatible accessories." },
  { id: 75, name: "Wound dressings & bandages", category: "wound-care", description: "Gauze, absorbent dressings, adhesive dressings, crepe bandages, tapes and wound-care accessories." },
  { id: 76, name: "Pipettes, test tubes & microscope slides", category: "laboratory", description: "Routine laboratory plasticware and glassware, including pipettes, tips, tubes, slides, cover slips and racks." },
  { id: 77, name: "Foetal monitor & foetal Doppler", category: "maternity", description: "Antenatal monitoring options for foetal heart rate and maternal parameters, with probes and accessories as applicable." },
  { id: 78, name: "Neonatal incubator & radiant warmer", category: "maternity", description: "Neonatal thermal-care equipment for maternity and newborn units. Configuration, accessories and service requirements confirmed on enquiry." },
  { id: 79, name: "Dental chair & delivery unit", category: "dental", description: "Dental treatment chairs and integrated delivery units, with operating light, instrument tray and suction options." },
  { id: 80, name: "Physiotherapy & rehabilitation equipment", category: "physiotherapy", description: "Rehabilitation and therapy equipment such as treatment couches, exercise equipment, parallel bars and electrotherapy devices." },
  { id: 81, name: "Medical oxygen & gas distribution systems", category: "medical-gases", description: "Medical gas manifolds, pipeline components, regulators, flowmeters and suction solutions, subject to site assessment and technical specification." },
  { id: 82, name: "Sterilization pouches & indicators", category: "sterilization", description: "Sterilization wraps, pouches, chemical indicators and process-monitoring consumables for CSSD workflows." },
  { id: 83, name: "Specimen containers & laboratory collection supplies", category: "laboratory", description: "Specimen jars, sample tubes, collection containers, transport accessories and laboratory collection consumables." },
  { id: 84, name: "Laboratory refrigerators & cold-chain storage", category: "laboratory", description: "Laboratory and medical refrigerators, freezers and temperature-monitoring options for controlled storage." },
  { id: 85, name: "Microbiology culture media & stains", category: "reagents", description: "Selected culture media, stains and microbiology laboratory reagents, sourced to laboratory method and specification." },
  { id: 86, name: "Pharmacy refrigerators & storage systems", category: "pharmacy-supplies", description: "Medical-grade cold storage, pharmacy shelving, bins and medication-handling storage solutions. Product requirements confirmed on enquiry." },
  { id: 87, name: "Infection prevention & healthcare waste supplies", category: "infection-prevention", description: "Hand-hygiene products, surface disinfection supplies, sharps containers, clinical waste bags and segregation bins." },
  { id: 88, name: "Washer-disinfectors & CSSD equipment", category: "sterilization", description: "Washer-disinfectors, instrument cleaning equipment, sealing systems and CSSD workflow solutions, specified per facility." },
  { id: 89, name: "CT & MRI imaging systems", category: "imaging", description: "Advanced imaging equipment sourcing for capital projects, including room planning, technical specifications and installation coordination." }

];
