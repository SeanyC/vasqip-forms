export const OPTIONS = {
  diabetes: [
    "1=no",
    "2=diet",
    "3=oral +/- non-insulation injection",
    "4=insulin"
  ],
  tobacco: [
    "1=never",
    "2=non in 12 months",
    "3=cigs only",
    "4=other (no cigs)",
    "5=cigs + other"
  ],
  tobaccoTime: [
    "1=w/in 2 wks",
    "2=2wks-3 mos",
    "3=3-12 mos",
    "NA"
  ],
  drugScreening: [
    "1=not done",
    "2=negative result",
    "3=positive NOT Rx",
    "4=pos Rx"
  ],
  dyspnea: [
    "1=no",
    "2=mod exertion",
    "3=at rest"
  ],
  sleepApnea: [
    "1= none level 1",
    "2= suspicion level 2",
    "3= confirmed level 3"
  ],
  sleepApneaCompliance: [
    "1= nightly",
    "2= ≥4x per wk",
    "3= <4x/wk",
    "4= not documented"
  ],
  functionalHealthStatus: [
    "1= independent",
    "2= partially dependent",
    "3= totally dependent"
  ],
  currentResidence: [
    "1= home",
    "2= acute care facility",
    "3= long term care",
    "4= homeless",
    "5= unknown"
  ],
  ambulationDevice: [
    "1= ambulates w/o device",
    "2= ambulates w/ cane or walker",
    "3= uses manual WC indepen.",
    "4= does not ambulate or use manual WC indepen."
  ],
  chf: [
    "0= N card dx, CHF, or sx",
    "1= Y card dx/chf, N sx",
    "2= Y card dx/chf, Y mild sx",
    "3= Y card dx/chf, Y marked sx",
    "4= Y card dx/chf, Y sx at rest",
    "5 = N card dx/chf, sx unknown",
    "6= Y card dx/chf, sx unknown"
  ],
  priorMi: [
    "0= no",
    "1= yes ≤ 7 days preop",
    "2= yes >7 days-6 mos preop",
    "4= yes >6 mo preop",
    "5= unknown"
  ],
  pci: [
    "1= none",
    "2= w/in <12 hrs of OR",
    "3= >12hr-7d",
    "4= >7d",
    "5= unknown"
  ],
  priorHeartSurgery: [
    "0=none",
    "1= CABG only",
    "2= valve only",
    "3= CABG/valve",
    "4= other",
    "5= CABG/ other",
    "6= unknown"
  ],
  anginaSeverity: [
    "N = none",
    "I = class I",
    "II = class II",
    "III = class III",
    "IV = class IV",
    "U = unknown"
  ],
  anginaTimeframe: [
    "1= no angina",
    "2= w/in 14 days",
    "3= 15-30 days",
    "4= unknown"
  ],
  hypertension: [
    "1=No",
    "2=Yes w/o med",
    "3=Yes w/ med",
    "4=unknown"
  ],
  pad: [
    "1= No",
    "2= Yes w/o angi, revasc, amp",
    "3= Yes, w/ hx angi, revasc, amp"
  ],
  carotidObstruction: [
    "0= no CVD",
    "1= yes, no surg repair",
    "2= yes, prior repair"
  ],
  hxOfCvd: [
    "0= no CVD",
    "1= hx of TIAs",
    "2= CVA/stroke - NO deficit",
    "3= CVA/stroke - w/ deficit"
  ],
  impairedCog: [
    "0= none - no impairment",
    "1= yes - doc'd hx",
    "2= yes - doc'd & declining",
    "3= no doc"
  ],
  bleedingRisk: [
    "Yes = bleeding risk med not dc'd",
    "No = no bleeding risk from med"
  ],
  chemo: [
    "1= no chemo",
    "2= w/in 30 d",
    "3= 31-90 d"
  ],
  sepsis: [
    "N=none",
    "2=sepsis",
    "3=sepsis shock"
  ],
  priorSurgeries: [
    "1", "2", "3", "4", "5", "6= >5"
  ]
} 