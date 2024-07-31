import React from "react";
import { Chart } from "react-google-charts";

export default class EmployeeReport extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      department: [],
      title: [],
      dataByDepartments: [
        ["Department", "Number of Employees"],
        ["IT", 50],
        ["Marketing", 40],
        ["HR", 20],
        ["Engineering", 60],
      ],
      dataByTypes: [
        ["Type", "Number of Employees"],
        ["Seasonal", 15],
        ["Contract", 25],
        ["Full-Time", 100],
        ["Part-Time", 30],
      ],
      dataByTitles: [
        ["Title", "Number of Employees"],
        ["Employee", 90],
        ["Manager", 40],
        ["Director", 10],
        ["VP", 5],
      ],
      dataReaching65: [
        ["Month", "Number of Employees"],
        ["August", 2],
        ["September", 4],
        ["October", 3],
        ["November", 1],
        ["December", 2],
        ["January", 3],
      ],
      pieOptions: {
        legend: "none",
        chartArea: { left: 15, top: 15, right: 0, bottom: 0 },
        pieSliceText: "label",
      },
      columnOptions: {
        legend: { position: "none" },
        chartArea: { width: "70%" },
        hAxis: { title: "Number of Employees" },
        vAxis: { title: "Category" },
        bar: { groupWidth: "30%" },
        series: {
            0: { color: "#4caf50" },
          }
      },
      barOptions: {
        chartArea: { width: "70%", height: "70%" },
        hAxis: {
          title: "Number of Employees",
          minValue: 0,
          textStyle: { color: "#333", fontSize: 12 },
          titleTextStyle: { color: "#333", fontSize: 14, bold: true },
        },
        vAxis: {
          title: "Title",
          textStyle: { color: "#333", fontSize: 12 },
          titleTextStyle: { color: "#333", fontSize: 14, bold: true },
        },
        bars: "vertical", // Can be "horizontal" or "vertical"
        colors: ["#C5CAE9"], // Different colors for bars
        bar: { groupWidth: "30%" }, // Adjust width of bars
        annotations: {
          always: true,
          textStyle: {
            fontSize: 12,
            color: '#000', // Black text color
            auraColor: 'none',
          },
        },
        legend: { position: "none" },
      },
      lineOptions: {
        title: "Employees Reaching Age 65 by Month",
        curveType: "function", // Smooth curves for the lines
        legend: { position: "bottom" },
        chartArea: { width: "70%" },
        hAxis: { title: "Month" },
        vAxis: { title: "Number of Employees" },
        colors: ["#ff5722", "#4caf50", "#2196f3", "#ff9800"], // Different colors for each line
        series: {
          0: { color: "#ff5722", lineWidth: 3 }, 
        }, 
        animation: {
          duration: 1000,
          easing: 'out',
        },
        lineWidth: 4, // Thicker lines to give a more pronounced effect
      },
    };
    this.API_SERVER_URL = process.env.API_SERVER_URL;
  }

  componentDidMount = async () => {
    const employees = await this.fetchEmployees();

    this.setState({
      type: this.getEmployeeEmployeeTypeReport(employees),
      department: this.getEmployeeEmployeeDepartmentReport(employees),
      title: this.getEmployeeEmployeeTitleReport(employees)
    });
  };

  getEmployeeEmployeeDepartmentReport = (employees) => {
    const response = {
        it: 0,
        marketing: 0,
        hr: 0,
        engineering: 0,
      };

      employees.forEach((employee) => {
        switch (employee.Department) {
          case "IT":
            response.it++;
            break;
          case "Marketing":
            response.marketing++;
            break;
          case "HR":
            response.hr++;
            break;
          case "Engineering":
            response.engineering++;
            break;
          default:
            break;
        }
      });

      return [
        ["Employee Department", "Number of Employees"],
        ["IT", response.it],
        ["Marketing", response.marketing],
        ["HR", response.hr],
        ["Engineering", response.engineering],
      ];

  }

  getEmployeeEmployeeTitleReport = (employees) => {
    const response = {
        employee: 0,
        manager: 0,
        director: 0,
        vp: 0,
    };

    employees.forEach((employee) => {
      switch (employee.Title) {
        case "Employee":
          response.employee++;
          break;
        case "Manager":
          response.manager++;
          break;
        case "Director":
          response.director++;
          break;
        case "VP":
          response.vp++;
          break;
        default:
          break;
      }
    });

    return [
      ["Employee Title", "Number of Employees"],
      [`Employee: ${response.employee}`, response.employee],
      [`Manager: ${response.manager}`, response.manager],
      [`Director: ${response.director}`, response.director],
      [`VP: ${response.vp}`, response.vp],
    ];
  };


  getEmployeeEmployeeTypeReport = (employees) => {
    const response = {
      full_time: 0,
      part_time: 0,
      contract: 0,
      seasonal: 0,
    };

    employees.forEach((employee) => {
      switch (employee.EmployeeType) {
        case "FullTime":
          response.full_time++;
          break;
        case "PartTime":
          response.part_time++;
          break;
        case "Contract":
          response.contract++;
          break;
        case "Seasonal":
          response.seasonal++;
          break;
        default:
          break;
      }
    });

    return [
      ["Employee Type", "Number of Employees"],
      [`Full Time: ${response.full_time} `, response.full_time],
      [`Part Time: ${response.part_time} `, response.part_time],
      [`Contract: ${response.contract} `, response.contract],
      [`Seasonal: ${response.seasonal} `, response.seasonal],
    ];
  };

  fetchEmployees = async () => {
    try {
      const query = `query {
        getAllEmployees {
          empId
          FirstName
          LastName
          Age
          DateOfBirth
          DateOfJoining
          Title
          Department
          EmployeeType
          CurrentStatus
        }
      }`;

      const response = await fetch(`${this.API_SERVER_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }

      const result = await response.json();
      return result.data.getAllEmployees;
    } catch (error) {
      this.setState({ error: error.message });
      return [];
    }
  };

  render() {
    return (
      
      <>
        <h1>Employee Report</h1>
        <div>
            <div className="report">
            <div style={{ width: "48%" }}>
                <h2>Employee by Type</h2>
                <Chart
                chartType="PieChart"
                data={this.state.type}
                options={{ ...this.state.pieOptions, title: "Employee Types", is3D: true  , pieSliceText: "label",
                    tooltip: { trigger: "both" },
                    slices: {
                        0: { offset: 0.1, color: "#9c27b0" }, // Purple
                        1: { offset: 0, color: "#009688" }, // Teal
                        2: { offset: 0, color: "#ff9800" }, // Orange
                        3: { offset: 0, color: "#9e9e9e" }, // Grey
                      },}}
                width={"100%"}
                height={"300px"}
                />
            </div>

            <div style={{ width: "48%" }}>
                <h2>Employee by Departments</h2>
                <Chart
                chartType="PieChart"
                data={this.state.department}
                options={{ ...this.state.pieOptions, title: "Employees by Departments" ,pieHole: 0.4,pieSliceText: "label",slices: [
                    {  color: "#a1887f" }, // Purple
                    { color: "#004d40" }, // Teal
                    { color: "#cddc39" }, // Indigo
                    { color: "#e91e63" }, // Bright red
                  ] }}
                width={"100%"}
                height={"300px"}
                />
            </div>

            <div style={{ width: "95%", marginTop: "4em" }}>
                <h2>Employee by Titles</h2>
                <Chart
                chartType="ColumnChart"
                data={this.state.title}
                options={{ ...this.state.columnOptions, title: "Employees by Titles" }}
                width={"100%"}
                height={"300px"}
                />
            </div>

            <div style={{ width: "95%", marginTop: "4em" }}>
                <h2>Employees Reaching Age 65 by Month</h2>
                <Chart
                chartType="LineChart"
                data={this.state.type}
                options={this.state.lineOptions}
                width={"100%"}
                height={"300px"}
                />
            </div>

            <div style={{ width: "95%", marginTop: "4em" }}>
                <h2>Example Bar Chart</h2>
                <Chart
                chartType="BarChart"
                data={this.state.type}
                options={this.state.barOptions}
                width={"100%"}
                height={"300px"}
                />
            </div>
            </div>
        </div>
      </>
    );
  }
}