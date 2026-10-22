export const cv = {
  name: "Sangjae Lee",
  title: "Staff Engineer, Samsung Research",
  headline: "Wireless Sensing, Indoor Localization, and AI-Native Network Intelligence",
  email: "research@studiosjlee.com",
  secondaryEmail: "summit@kaist.ac.kr",
  phone: "+82-10-8960-0708",
  github: "https://github.com/canlang",
  linkedin: "https://www.linkedin.com/in/sjlee-korea/",
  location: "Daejeon / Seoul, Republic of Korea",
  intro:
    "Staff Engineer at Samsung Research with a Ph.D. in Computer Science from KAIST, specializing in indoor localization, wireless sensing, sensor fusion, and AI-driven network optimization.",
  profile:
    "My work focuses on turning sensing and localization research into dependable systems for real-world deployment. Across research and engineering roles, I have developed methods that connect noisy physical signals to practical positioning, connectivity, and optimization decisions.",
  metrics: [
    {
      value: "14+",
      label: "Years in localization and sensing research"
    },
    {
      value: "9",
      label: "Peer-reviewed publications in MobiSys, IEEE, etc."
    },
    {
      value: "8+",
      label: "Sponsored industry-academic R&D grants led"
    }
  ],
  strengths: [
    {
      title: "Applied Research Leadership",
      detail:
        "Turning advanced sensing and localization research into systems that hold up in product and deployment contexts."
    },
    {
      title: "Signal-to-Intelligence Systems",
      detail:
        "Designing pipelines that move from raw wireless and geomagnetic signals to reliable inference and decision support."
    },
    {
      title: "AI for Network Operations",
      detail:
        "Extending conventional ML work into LLM-based decision support for network optimization in wireless environments."
    }
  ],
  interests: [
    "Wireless sensing",
    "Indoor localization",
    "Sensor fusion & SLAM",
    "Network intelligence",
    "AI-driven optimization"
  ],
  experience: [
    {
      company: "Samsung Research",
      role: "Staff Engineer",
      period: "Apr 2022 - Present",
      summary:
        "Leading research and development for indoor localization and wireless intelligence systems, with work spanning signal-based positioning, learned sensing models, and AI-driven optimization.",
      bullets: [
        "Developed indoor localization systems using geomagnetic signals, Wi-Fi, and conventional machine learning approaches.",
        "Built spatial discrimination models for distinguishing users within near-identical indoor environments using deep neural networks.",
        "Designed motion-based proximity detection systems for device interaction and sensing applications.",
        "Developed context-aware network switching mechanisms between cellular and Wi-Fi using learned models for connectivity optimization.",
        "Developing an LLM-based network optimization agent for decision support in wireless environments.",
        "Extended research prototypes into deployment-oriented system design across localization, sensing, and networking."
      ]
    }
  ],
  education: [
    {
      degree: "Ph.D. in Computer Science",
      school: "KAIST",
      period: "Sep 2012 - Feb 2021",
      detail: "Advisor: Prof. Dongsoo Han",
      focus: "Dissertation: High-precision Indoor Positioning using Geomagnetic Anomaly"
    },
    {
      degree: "M.S. in Computer Science",
      school: "KAIST",
      period: "Sep 2010 - Aug 2012",
      focus: "Thesis: Missing Signal Imputation for Accurate WLAN-based Indoor Localization System"
    },
    {
      degree: "B.S. in Computer Science",
      school: "Hanyang University",
      period: "Mar 2006 - Feb 2010",
      focus: "Project: Intelligent Lane Detection (Dean's List)"
    }
  ],
  sponsoredResearch: {
    featured: [
      {
        title: "Automated Techniques for Crowdsourcing Radio Map Construction",
        sponsor: "Huawei R&D (Shanghai)",
        period: "Oct 2018 - Sep 2021",
        role: "Industry-Academic Joint R&D",
        description:
          "Developed autonomous robotic mapping ('Rover') and crowdsourced radio map construction frameworks fusing mobile robot SLAM with multi-frequency Wi-Fi fingerprints."
      },
      {
        title: "Crowdsourcing-based Indoor GPS System",
        sponsor: "National Research Foundation of Korea (NRF)",
        period: "Mar 2020 - Feb 2021",
        role: "Government Research Grant",
        description:
          "Researched infrastructure-free indoor positioning leveraging ambient 3D geomagnetic anomaly modeling and sequence matching across heterogeneous mobile devices."
      },
      {
        title: "Location-Based Malicious Access Point Detection & Radio Map Systems",
        sponsor: "Samsung Electronics",
        period: "2013 - 2018",
        role: "Industry-Sponsored R&D (3 Consecutive Projects)",
        description:
          "Conducted multiple sponsored R&D contracts covering Wi-Fi radio map automatic generation, spatial fingerprint updating, and location-based rogue AP anomaly detection."
      },
      {
        title: "KAILOS: Global Crowdsourced Indoor Positioning Service Platform",
        sponsor: "KAIST / Open Service Platform",
        period: "2014 - 2018",
        role: "Platform Architecture & Operations",
        url: "https://kailos.io",
        description:
          "Architected cloud-native backend APIs, floor-plan registration workflows, and positioning SDKs for a public crowdsourced indoor localization platform operating at kailos.io."
      }
    ],
    additional: [
      {
        title: "Integrated Operation Technology for Science Museum Services Based on GIPS",
        sponsor: "National Research Foundation of Korea (NRF)",
        period: "2019"
      },
      {
        title: "COVID-19 In-Hospital Infection Prevention & Spatial Contact Tracing",
        sponsor: "KAIST",
        period: "2020"
      },
      {
        title: "Integrated Safety Management System for Offshore Plant Workers Based on Hybrid Positioning",
        sponsor: "NET Co., Ltd.",
        period: "2017 - 2018"
      },
      {
        title: "Feasibility Test of Applying Indoor Positioning Technology to Railway Stations",
        sponsor: "Korea Transport Institute (KOTI)",
        period: "2014 - 2015"
      },
      {
        title: "KTNET-KAIST Joint Research Center Support Project",
        sponsor: "Korea Trade Network (KTNET)",
        period: "2012 - 2015"
      }
    ]
  },
  publications: [
    {
      year: "2020",
      title: "Indoor Localization Using Augmented Vector of Geomagnetic Field",
      venue: "IEEE Access",
      type: "Journal",
      authors: ["Sangjae Lee", "Seungwoo Chae", "Dongsoo Han"],
      url: "https://ieeexplore.ieee.org/document/9216148",
      doi: "10.1109/ACCESS.2020.3029671",
      bibtex: `@article{lee2020indoor,
  title={Indoor Localization Using Augmented Vector of Geomagnetic Field},
  author={Lee, Sangjae and Chae, Seungwoo and Han, Dongsoo},
  journal={IEEE Access},
  volume={8},
  pages={184852--184863},
  year={2020},
  publisher={IEEE},
  doi={10.1109/ACCESS.2020.3029671}
}`
    },
    {
      year: "2020",
      title: "Fusion of the SLAM with Wi-Fi-Based Positioning Methods for Mobile Robot",
      venue: "MDPI Sensors",
      type: "Journal",
      authors: ["Gunwoo Lee", "Byeong-Cheol Moon", "Sangjae Lee", "Dongsoo Han"],
      url: "https://www.mdpi.com/1424-8220/20/18/5182",
      doi: "10.3390/s20185182",
      bibtex: `@article{lee2020fusion,
  title={Fusion of the SLAM with Wi-Fi-Based Positioning Methods for Mobile Robot},
  author={Lee, Gunwoo and Moon, Byeong-Cheol and Lee, Sangjae and Han, Dongsoo},
  journal={Sensors},
  volume={20},
  number={18},
  pages={5182},
  year={2020},
  publisher={MDPI},
  doi={10.3390/s20185182}
}`
    },
    {
      year: "2019",
      title: "Rover Who Make Indoor Radio Map",
      venue: "ACM MobiSys '19",
      type: "Conference",
      authors: ["Sangjae Lee", "Dongsoo Han"],
      url: "https://dl.acm.org/doi/abs/10.1145/3307334.3328596",
      doi: "10.1145/3307334.3328596",
      bibtex: `@inproceedings{lee2019rover,
  title={Rover Who Make Indoor Radio Map},
  author={Lee, Sangjae and Han, Dongsoo},
  booktitle={Proceedings of the 17th Annual International Conference on Mobile Systems, Applications, and Services (MobiSys '19)},
  pages={668--669},
  year={2019},
  doi={10.1145/3307334.3328596}
}`
    },
    {
      year: "2017",
      title: "Construction of an Indoor Positioning System for Home IoT Applications",
      venue: "IEEE ICC '17",
      type: "Conference",
      authors: ["Sangjae Lee", "Seungwoo Chae", "Sukhoon Jung", "Dongsoo Han"],
      url: "https://ieeexplore.ieee.org/abstract/document/7997159/",
      doi: "10.1109/ICC.2017.7997159",
      bibtex: `@inproceedings{lee2017construction,
  title={Construction of an Indoor Positioning System for Home IoT Applications},
  author={Lee, Sangjae and Chae, Seungwoo and Jung, Sukhoon and Han, Dongsoo},
  booktitle={2017 IEEE International Conference on Communications (ICC)},
  pages={1--6},
  year={2017},
  organization={IEEE},
  doi={10.1109/ICC.2017.7997159}
}`
    },
    {
      year: "2016",
      title: "A Crowdsourcing-Based Global Indoor Positioning and Navigation System",
      venue: "Pervasive and Mobile Computing",
      type: "Journal",
      authors: ["Suk-hoon Jung", "Sangjae Lee", "Dongsoo Han"],
      url: "https://www.sciencedirect.com/science/article/pii/S1574119216000389",
      doi: "10.1016/j.pmcj.2016.03.003",
      bibtex: `@article{jung2016crowdsourcing,
  title={A crowdsourcing-based global indoor positioning and navigation system},
  author={Jung, Suk-hoon and Lee, Sangjae and Han, Dongsoo},
  journal={Pervasive and Mobile Computing},
  volume={29},
  pages={29--44},
  year={2016},
  publisher={Elsevier},
  doi={10.1016/j.pmcj.2016.03.003}
}`
    },
    {
      year: "2016",
      title: "A Sensor Fusion Method for Wi-Fi-Based Indoor Positioning",
      venue: "ICT Express",
      type: "Journal",
      authors: ["Dongsoo Han", "Suk-hoon Jung", "Sangjae Lee"],
      url: "https://www.sciencedirect.com/science/article/pii/S2405959516300145",
      doi: "10.1016/j.icte.2016.05.002",
      bibtex: `@article{han2016sensor,
  title={A sensor fusion method for Wi-Fi-based indoor positioning},
  author={Han, Dongsoo and Jung, Suk-hoon and Lee, Sangjae},
  journal={ICT Express},
  volume={2},
  number={2},
  pages={69--72},
  year={2016},
  publisher={Elsevier},
  doi={10.1016/j.icte.2016.05.002}
}`
    },
    {
      year: "2014",
      title: "KAILOS: KAIST Indoor Locating System",
      venue: "IEEE IPIN '14",
      type: "Conference",
      authors: ["Dongsoo Han", "Sangjae Lee", "Sunghoon Kim"],
      url: "https://ieeexplore.ieee.org/abstract/document/7275535/",
      doi: "10.1109/IPIN.2014.7275535",
      bibtex: `@inproceedings{han2014kailos,
  title={KAILOS: KAIST Indoor Locating System},
  author={Han, Dongsoo and Lee, Sangjae and Kim, Sunghoon},
  booktitle={2014 International Conference on Indoor Positioning and Indoor Navigation (IPIN)},
  pages={671--674},
  year={2014},
  organization={IEEE},
  doi={10.1109/IPIN.2014.7275535}
}`
    },
    {
      year: "2012",
      title: "Uncaught Signal Imputation for WLAN-Based Positioning",
      venue: "ACM MobiGIS '12",
      type: "Conference",
      authors: ["Sangjae Lee", "Sukhoon Jung", "Dongsoo Han"],
      url: "https://dl.acm.org/doi/abs/10.1145/2442810.2442825",
      doi: "10.1145/2442810.2442825",
      bibtex: `@inproceedings{lee2012uncaught,
  title={Uncaught Signal Imputation for WLAN-Based Positioning},
  author={Lee, Sangjae and Jung, Sukhoon and Han, Dongsoo},
  booktitle={Proceedings of the First ACM SIGSPATIAL International Workshop on Mobile Geographic Information Systems (MobiGIS '12)},
  pages={57--64},
  year={2012},
  organization={ACM},
  doi={10.1145/2442810.2442825}
}`
    },
    {
      year: "2012",
      title: "Elekspot: A Platform for Urban Place Recognition via Crowdsourcing",
      venue: "IEEE/IPSJ SAINT '12",
      type: "Conference",
      authors: ["Minkyu Lee", "SukHoon Jung", "Sangjae Lee", "Dongsoo Han"],
      url: "https://ieeexplore.ieee.org/abstract/document/6305280/",
      doi: "10.1109/SAINT.2012.33",
      bibtex: `@inproceedings{lee2012elekspot,
  title={Elekspot: A Platform for Urban Place Recognition via Crowdsourcing},
  author={Lee, Minkyu and Jung, SukHoon and Lee, Sangjae and Han, Dongsoo},
  booktitle={2012 IEEE/IPSJ 12th International Symposium on Applications and the Internet (SAINT)},
  pages={188--193},
  year={2012},
  organization={IEEE},
  doi={10.1109/SAINT.2012.33}
}`
    }
  ],
  skills: [
    {
      label: "Languages",
      items: ["Python", "Java", "C/C++", "JavaScript", "MATLAB", "Kotlin"]
    },
    {
      label: "Modeling & Analysis",
      items: ["Deep Learning", "Signal Processing", "Multi-Sensor Fusion", "SLAM", "Factor-Graph Optimization"]
    },
    {
      label: "Systems & Domains",
      items: ["Indoor Localization", "Wireless Sensing", "Geomagnetic Anomaly Modeling", "Autonomous Network Intelligence"]
    }
  ]
};
