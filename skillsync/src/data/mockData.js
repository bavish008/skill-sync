// All prototype data lives here (static, frontend-only).
export const sectors = ['Automotive', 'Renewable Energy', 'Manufacturing', 'IT', 'Healthcare', 'Aerospace']
export const districts = ['Coimbatore', 'Chennai', 'Madurai', 'Salem', 'Tiruchirappalli', 'Erode']
export const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']

export const kpis = [
  { label: 'Active Job Roles', value: '1,284', delta: '12.8%', up: true, good: true, icon: 'Briefcase' },
  { label: 'Emerging Skills', value: '147', delta: '18.4%', up: true, good: true, icon: 'Sparkles' },
  { label: 'Skill Gaps', value: '326', delta: '6.2%', up: false, good: true, icon: 'AlertTriangle' },
  { label: 'Courses Under Review', value: '42', icon: 'BookOpen' },
  { label: 'Employer Responses', value: '684', delta: '21.3%', up: true, good: true, icon: 'Users' },
  { label: 'Placement Alignment', value: '78.6%', delta: '5.8%', up: true, good: true, icon: 'Target' },
]
export const trends = months.map((m, i) => ({ m, demand: 52 + i * 3 + (i % 3) * 2, supply: 48 + i * 1.6 + (i % 2) * 2 }))

const J = [
  ['EV Technician', 'Automotive', 'Very High', 31, 4.2, ['Battery Diagnostics', 'EV Electrical Systems', 'BMS', 'CAN Bus', 'Motor Controllers'], ['Coimbatore', 'Chennai', 'Salem']],
  ['Solar PV Technician', 'Renewable Energy', 'High', 24, 3.6, ['Solar Installation', 'Inverter Testing', 'Electrical Safety', 'Site Survey', 'SCADA'], ['Madurai', 'Tiruchirappalli']],
  ['CNC Operator', 'Manufacturing', 'High', 12, 3.4, ['CNC Programming', 'G-Code', 'Blueprint Reading', 'Metrology', 'CAM'], ['Coimbatore', 'Erode', 'Salem']],
  ['Cloud Engineer', 'IT', 'Very High', 28, 8.9, ['AWS', 'Kubernetes', 'Terraform', 'Linux', 'Networking'], ['Chennai', 'Coimbatore']],
  ['Data Analyst', 'IT', 'High', 19, 6.2, ['Python', 'SQL', 'Power BI', 'Statistics', 'Excel'], ['Chennai', 'Coimbatore', 'Madurai']],
  ['Industrial Automation Technician', 'Manufacturing', 'High', 17, 4.8, ['PLC Programming', 'SCADA', 'Robotics', 'HMI', 'Sensors'], ['Coimbatore', 'Chennai']],
  ['Healthcare Assistant', 'Healthcare', 'Medium', 9, 2.6, ['Patient Care', 'First Aid', 'Vitals Monitoring', 'Hygiene', 'EMR'], ['Madurai', 'Salem', 'Erode']],
  ['Drone Technician', 'Aerospace', 'High', 38, 4.5, ['Drone Assembly', 'Flight Controllers', 'GIS Mapping', 'Payloads', 'Regulations'], ['Coimbatore', 'Tiruchirappalli']],
]
export const jobs = J.map(([role, sector, demand, growth, salary, skills, dist], i) => ({
  id: i, role, sector, demand, growth, salary, districts: dist,
  skills: skills.map((s, k) => [s, 96 - k * 7 - (i % 3) * 2]),
  trend: Array.from({ length: 6 }, (_, k) => 40 + growth + k * 5 + ((i * 7 + k * 3) % 9)),
  experience: [['0-1 yrs', 38], ['1-3 yrs', 34], ['3-5 yrs', 20], ['5+ yrs', 8]],
  employers: 20 + i * 9, related: ['Electric Vehicle Technician', 'Industrial Automation', 'Data Analytics'].slice(0, 2 + (i % 2)),
  emerging: skills.slice(2, 4),
}))

const S = [
  ['Generative AI', 'AI & Data', 46, 34], ['Python', 'IT', 18, 71], ['Cloud Computing', 'IT', 27, 48], ['EV Diagnostics', 'Automotive', 41, 32],
  ['BMS', 'Automotive', 44, 30], ['Robotics', 'Manufacturing', 29, 45], ['CNC Programming', 'Manufacturing', 12, 68], ['Solar Installation', 'Renewable Energy', 24, 57],
  ['Cybersecurity', 'IT', 33, 41], ['Data Analytics', 'AI & Data', 22, 62],
]
export const skills = S.map(([name, category, growth, coverage], i) => ({
  id: i, name, category, growth, coverage, gap: 100 - coverage, demandScore: Math.min(97, 60 + growth),
  demand: growth > 35 ? 'Very High' : growth > 20 ? 'High' : 'Medium',
  status: 100 - coverage > 55 ? 'Critical Gap' : 100 - coverage > 35 ? 'Emerging' : 'Covered',
  trend: months.slice(6).map((m, k) => ({ m, demand: Math.round(40 + growth / 2 + k * (growth / 8)) })),
  industries: ['Automotive', 'IT', 'Manufacturing'].slice(0, 2 + (i % 2)), roles: ['EV Technician', 'Data Analyst', 'Cloud Engineer'],
  courses: ['Data Analytics', 'Cloud Support Associate'], districtDemand: districts.slice(0, 4).map((d, k) => ({ d, v: 85 - k * 11 - (i % 4) * 3 })),
}))

export const courses = [
  ['Electric Vehicle Technician', 'Automotive', 1840, 74, 68, 'Very High', 'Needs Update'],
  ['CNC Machine Operator', 'Manufacturing', 2210, 81, 84, 'High', 'Aligned'],
  ['Solar PV Installer', 'Renewable Energy', 1320, 69, 72, 'High', 'High Demand'],
  ['Industrial Automation', 'Manufacturing', 1560, 72, 61, 'High', 'At Risk'],
  ['Cloud Support Associate', 'IT', 980, 77, 79, 'Very High', 'Aligned'],
  ['Data Analytics', 'IT', 1710, 70, 66, 'High', 'Needs Update'],
  ['Healthcare Assistant', 'Healthcare', 2480, 83, 88, 'Medium', 'Aligned'],
].map(([name, sector, enrolled, placement, alignment, demand, status], id) => ({ id, name, sector, enrolled, placement, alignment, demand, status }))
export const evMatrix = [['EV Electrical Systems', 95, 90], ['Battery Diagnostics', 92, 54], ['BMS', 88, 35], ['CAN Bus', 81, 22], ['Motor Controller', 75, 50]]

export const curriculum = [
  { course: 'Electric Vehicle Technician', items: [['Battery Management', 92, 54], ['CAN Bus Diagnostics', 81, 22], ['EV Diagnostics', 87, 43], ['High Voltage Safety', 94, 88]], employers: [12, 15],
    recs: ['Add BMS diagnostics practical module', 'Introduce CAN bus troubleshooting', 'Add EV diagnostic software training', 'Increase practical lab hours', 'Upskill trainers in BMS and CAN diagnostics'] },
  { course: 'Industrial Automation', items: [['PLC Programming', 90, 70], ['SCADA', 78, 40], ['Robotics Basics', 74, 35], ['Industrial IoT', 70, 18]], employers: [9, 14],
    recs: ['Add SCADA lab module', 'Introduce industrial IoT basics', 'Partner with automation OEMs for robotics practicals', 'Upskill trainers in SCADA and IIoT'] },
  { course: 'Data Analytics', items: [['Python', 88, 72], ['SQL', 90, 80], ['Power BI', 76, 45], ['Generative AI Tools', 70, 12]], employers: [10, 13],
    recs: ['Add Generative AI tools module', 'Expand Power BI dashboard practicals', 'Add capstone with real employer data'] },
]

export const districtData = Object.fromEntries(districts.map((d, i) => {
  const f = 1 - i * 0.07
  return [d, {
    demand: Math.round(86 * f), capacity: Math.round(58 * f + 4), trainers: Math.round(48 * f + 6), equipment: Math.round(62 * f + 3),
    sectors: [['Manufacturing', 'Very High'], ['Automotive', 'High'], ['Renewable Energy', 'High'], ['IT', 'Medium'], ['Healthcare', 'Medium']],
    plan: [['EV Technician', 120, 420, 350, 'Critical'], ['Solar PV Installer', 80, 210, 180, 'High'], ['CNC Operator', 200, 350, 300, 'High'], ['Data Analytics', 150, 210, 190, 'Medium']]
      .map(([course, cur, proj, rec, priority]) => ({ course, cur: Math.round(cur * f), proj: Math.round(proj * f), rec: Math.round(rec * f), gap: Math.round(rec * f) - Math.round(cur * f), priority })),
  }]
}))

export const employers = [
  ['Ashok Motors', 'Automotive', 48, 'BMS', 'Submitted'], ['GreenGrid Solar', 'Renewable Energy', 32, 'Solar Installation', 'Submitted'],
  ['Precision Tools Ltd', 'Manufacturing', 41, 'CNC Programming', 'Pending'], ['CloudNine Tech', 'IT', 27, 'Kubernetes', 'Submitted'],
  ['MediCare Hospitals', 'Healthcare', 36, 'Patient Care', 'Pending'], ['AeroDyn Systems', 'Aerospace', 18, 'Drone Assembly', 'Submitted'],
  ['VoltEdge EV', 'Automotive', 55, 'Battery Diagnostics', 'Submitted'], ['AutoFab Robotics', 'Manufacturing', 29, 'PLC Programming', 'Overdue'],
].map(([company, sector, openRoles, topSkill, status], id) => ({ id, company, sector, openRoles, topSkill, status }))
export const employerKpis = [['Employers', '684'], ['Job Requirements', '1,942'], ['Skill Requests', '312'], ['Emerging Technologies', '87']]
export const employerSkills = [['Battery Diagnostics', 92, 45], ['BMS', 88, 32], ['CAN Bus', 80, 25], ['EV Electrical Systems', 90, 82]]

export const trainerKpis = [['Total Trainers', '2,840'], ['Trainers Requiring Upskilling', '436'], ['Emerging Technology Coverage', '61%'], ['Certification Coverage', '84%']]
export const trainers = [
  ['Rajesh Kumar', 'Electrical Systems', ['Electrical Fundamentals'], ['BMS', 'EV Diagnostics', 'CAN Bus'], 62],
  ['Meena Sundaram', 'CNC & Machining', ['CNC Programming', 'G-Code'], ['CAM Software', 'Metrology'], 81],
  ['Arun Prakash', 'Solar Energy', ['PV Installation'], ['Inverter Testing', 'SCADA'], 74],
  ['Divya Lakshmi', 'Data & Analytics', ['Python', 'SQL'], ['Generative AI', 'Power BI'], 68],
  ['Karthik Raja', 'Industrial Automation', ['PLC Basics'], ['SCADA', 'Industrial IoT', 'Robotics'], 55],
  ['Sangeetha R', 'Healthcare', ['Patient Care', 'First Aid'], ['EMR Systems'], 90],
].map(([name, specialization, current, recommended, readiness], id) => ({ id, name, specialization, current, recommended, readiness }))

export const candidateProfile = { education: 'ITI Electrician', skills: 'Electrical Fundamentals, Wiring', industry: 'Automotive', location: 'Coimbatore', experience: '1-2 years' }
export const careerPaths = [
  { title: 'EV Technician', demand: 'Very High', gaps: ['BMS', 'EV Diagnostics', 'CAN Bus'], course: 'Electric Vehicle Technician', duration: '6 months', districtDemand: 'Coimbatore 86%', opportunities: ['EV Technician', 'Battery Technician', 'EV Diagnostic Technician'] },
  { title: 'Solar PV Technician', demand: 'High', gaps: ['Inverter Testing', 'Solar Installation'], course: 'Solar PV Installer', duration: '4 months', districtDemand: 'Coimbatore 64%', opportunities: ['Solar Installer', 'Site Supervisor'] },
  { title: 'Industrial Automation Technician', demand: 'High', gaps: ['PLC Programming', 'SCADA'], course: 'Industrial Automation', duration: '8 months', districtDemand: 'Coimbatore 78%', opportunities: ['PLC Technician', 'Maintenance Engineer'] },
]
export const alerts = [
  { id: 1, title: 'New employer survey received', time: '5 min ago', detail: 'VoltEdge EV submitted its Q3 skill survey.', color: 'bg-blue-500' },
  { id: 2, title: 'High-demand skill detected', time: '1 hr ago', detail: 'Generative AI demand is up 46% year over year.', color: 'bg-emerald-500' },
  { id: 3, title: 'Course requires curriculum review', time: '3 hrs ago', detail: 'Electric Vehicle Technician alignment fell to 68%.', color: 'bg-amber-500' },
  { id: 4, title: 'District training capacity alert', time: 'Yesterday', detail: 'Coimbatore EV seats short by 230.', color: 'bg-red-500' },
]
export const reports = [
  ['Labour Market Report', 'Demand, growth and salary trends across job roles.', '12 Sep 2026'],
  ['District Skill Gap Report', 'District-wise gaps between demand and training supply.', '08 Sep 2026'],
  ['Course Alignment Report', 'Curriculum vs. industry requirement for every course.', '01 Sep 2026'],
  ['Emerging Skills Report', 'New and fast-growing skills detected this quarter.', '28 Aug 2026'],
  ['Employer Feedback Report', 'Consolidated employer survey responses.', '20 Aug 2026'],
  ['Training Capacity Report', 'Seats, trainers and equipment readiness by district.', '15 Aug 2026'],
].map(([title, description, last], id) => ({ id, title, description, last }))
