const patientAppointmentData = [
  { title: "Total Patients", data: 25 },
  { title: "Today's Appointments", data: 10 },
  { title: "Upcoming Appointments", data: 5 }
];
const patientData = [
  {
    patientId: 1,
    patientName: "ABCD",
    bmi: 12,
    engagementScore: 1.5
  },
  {
    patientId: 2,
    patientName: "Patient2",
    bmi: 30.4,
    engagementScore: 0.3
  },
  {
    patientId: 3,
    patientName: "Patient3",
    bmi: 26.6,
    engagementScore: 1.39
  },
  {
    patientId: 4,
    patientName: "Patient4",
    bmi: 16.6,
    engagementScore: 0.6
  },
  {
    patientId: 5,
    patientName: "Patient5",
    bmi: 35.9,
    engagementScore: 1.77
  },
  {
    patientId: 6,
    patientName: "Patient6",
    bmi: 17.4,
    engagementScore: 1.31
  },
  {
    patientId: 7,
    patientName: "Patient7",
    bmi: 28.6,
    engagementScore: 1.92
  },
  {
    patientId: 8,
    patientName: "Patient8",
    bmi: 16.6,
    engagementScore: 0.67
  },
  {
    patientId: 9,
    patientName: "Patient9",
    bmi: 16.4,
    engagementScore: 0.79
  },
  {
    patientId: 10,
    patientName: "Patient10",
    bmi: 15.1,
    engagementScore: 1.21
  },
  {
    patientId: 11,
    patientName: "Patient11",
    bmi: 33.8,
    engagementScore: 0.86
  }
];

const dashboardContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px",
  gap: "20px"
};
const Dashboard = () => {
  return (
    <div className="dashboardContainer" style={dashboardContainerStyles}>
      <SummarySection />
      <PatientData />
    </div>
  );
};

const summarySectionStyles = {
  display: "flex",
  gap: "4px"
};

const SummarySection = () => {
  return (
    <div style={summarySectionStyles}>
      {patientAppointmentData.map((data, index) => (
        <SummarisedData key={index} title={data.title} data={data.data} />
      ))}
    </div>
  );
};

const summarisedDataStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  border: "1px solid grey",
  padding: "14px",
  borderRadius: "10px"
};

const SummarisedData = ({ title, data }) => {
  return (
    <div className="dataContainer" style={summarisedDataStyles}>
      <div>{title}</div>
      <div>{data}</div>
    </div>
  );
};

const patientDataStyles = {
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  tableStyle: {
    width: "550px",
    border: "1px solid black",
    borderRadius: "4px",
    marginLeft: "auto",
    marginRight: "auto"
  }
};
const PatientData = () => {
  return (
    <div style={patientDataStyles}>
      <table style={patientDataStyles.tableStyle}>
        <tr>
          <th>Patient ID</th>
          <th>Patient Name</th>
          <th>BMI</th>
          <th>Engagement Score</th>
        </tr>
        {patientData.map((patient, index) => (
          <tr>
            <td key={index}>{patient.patientId}</td>
            <td key={index}>{patient.patientName}</td>
            <td key={index}>{patient.bmi}</td>
            <td key={index}>{patient.engagementScore}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Dashboard;
