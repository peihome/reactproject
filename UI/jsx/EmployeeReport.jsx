import React from "react";
import { Chart } from "react-google-charts";

export default class EmployeeReport extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      department: [],
      title: [],
      dataReaching65:[],
      dataJoinedCurrentYear:[],
      dataJoinedLast3MonthsByDepartment: [],

      pieOptions: {
        legend: "none",
        chartArea: { left: 15, top: 15, right: 0, bottom: 0 },
        pieSliceText: "label",
      },
      columnOptions: {
        legend: "none",
        chartArea: { width: "70%" },
        hAxis: { title: "Category" },
        vAxis: { title: "Number of Employees" },
        bar: { groupWidth: "30%" },
        series: {
            0: { color: "#4caf50" },
          }
      },
      reaching65BarOptions: {
        chartArea: { width: "70%", height: "70%" },
        hAxis: {
          title: "Number of Employees",
          textStyle: { color: "#333", fontSize: 12 },
          titleTextStyle: { color: "#333", fontSize: 14, bold: true },
        },
        vAxis: {
          title: "Month",
          minValue: 0,
          textStyle: { color: "#333", fontSize: 12 },
          titleTextStyle: { color: "#333", fontSize: 14, bold: true },
        },
        bars: "vertical",
        colors: ["#ff5722"], // Different color for bars
        bar: { groupWidth: "20%" }, // Adjust width of bars
        legend: { position: "none" },
      },
      barOptions: {
        chartArea: { width: "30%", height: "30%" },
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
      joinedLast3MonthsBarOptions: {
        title: "Employees Joined Last 3 Months by Department",
        chartArea: { width: "70%", height: "70%" },
        hAxis: {
          title: "Month",
          textStyle: { color: "#333", fontSize: 12 },
          titleTextStyle: { color: "#333", fontSize: 14, bold: true },
        },
        vAxis: {
          title: "Number of Employees",
          minValue: 0,
          textStyle: { color: "#333", fontSize: 12 },
          titleTextStyle: { color: "#333", fontSize: 14, bold: true },
        },
        bars: "vertical",
        colors: ["#ff5722", "#4caf50", "#2196f3", "#ff9800"], // Different colors for each department
        bar: { groupWidth: "30%" },
        legend: { position: "top" },
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 12,
            color: '#000',
            auraColor: 'none',
          },
        },
      },
      joinedCurrentYearBarOptions: {
        chartArea: { width: "70%", height: "70%" },
        hAxis: {
          title: "Month",
          textStyle: { color: "#333", fontSize: 12 },
          titleTextStyle: { color: "#333", fontSize: 14, bold: true },
        },
        vAxis: {
          title: "Number of Employees",
          minValue: 0,
          textStyle: { color: "#333", fontSize: 12 },
          titleTextStyle: { color: "#333", fontSize: 14, bold: true },
        },
        bars: "vertical",
        colors: ["#3f51b5"], // Different color for bars
        bar: { groupWidth: "20%" }, // Adjust width of bars
        legend: 'none',
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 12,
            color: '#000', // Black text color
            auraColor: 'none',
          },
        },
        
      },
    };
    this.API_SERVER_URL = process.env.API_SERVER_URL;
  }

  componentDidMount = async () => {
    const employees = await this.fetchEmployees();

    this.setState({
      type: this.getEmployeeTypeReport(employees),
      department: this.getEmployeeDepartmentReport(employees),
      title: this.getEmployeeTitleReport(employees),
      dataReaching65: this.getEmployeesReaching65Report(employees),
      dataJoinedCurrentYear: this.getEmployeesJoinedCurrentYearReport(employees),
      dataJoinedLast3MonthsByDepartment: this.getEmployeesJoinedLast3MonthsByDepartmentReport(employees),
    });
  };

  getEmployeeDepartmentReport = (employees) => {
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
  getEmployeesJoinedCurrentYearReport = (employees) => {
    const response = {};
    const now = new Date();
    const currentYear = now.getFullYear();

    employees.forEach((employee) => {
      const doj = new Date(employee.DateOfJoining);
      if (doj.getFullYear() === currentYear) {
        const month = doj.toLocaleString("default", { month: "long" });
        response[month] = (response[month] || 0) + 1;
      }
    });

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const data = [["Month", "Number of Employees"]];
    months.forEach((month) => {
      data.push([month, response[month] || 0]);
    });

    return data;
  };
  getEmployeesJoinedLast3MonthsByDepartmentReport = (employees) => {
    const response = {};
    const now = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(now.getMonth() - 3);

    employees.forEach((employee) => {
      const joinDate = new Date(employee.DateOfJoining);
      if (joinDate >= threeMonthsAgo && joinDate <= now) {
        const month = joinDate.toLocaleString("default", { month: "short" });
        const department = employee.Department || "Unknown";

        if (!response[month]) {
          response[month] = { IT: 0, Marketing: 0, HR: 0, Engineering: 0 };
        }
        if (response[month][department] !== undefined) {
          response[month][department]++;
        }
      }
    });

    const data = [["Month", "IT", "Marketing", "HR", "Engineering"]];
    Object.keys(response).forEach((month) => {
      data.push([month, response[month].IT, response[month].Marketing, response[month].HR, response[month].Engineering]);
    });

    return data;
  };
  getEmployeeTitleReport = (employees) => {
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

  getEmployeeTypeReport = (employees) => {
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

  getEmployeesReaching65Report = (employees) => {
    const response = {};
    const now = new Date();
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(now.getMonth() + 6);

    employees.forEach((employee) => {
      const dob = new Date(employee.DateOfBirth);
      const retirementDate = new Date(dob.setFullYear(dob.getFullYear() + 65));

      if (retirementDate >= now && retirementDate <= sixMonthsFromNow) {
        const month = retirementDate.toLocaleString('default', { month: 'long' });
        response[month] = (response[month] || 0) + 1;
      }
    });

    return [["Month", "Number of Employees"]].concat(
      Object.entries(response)
    );
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
            <div style={{ width: "50%" }}>
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

            <div style={{ width: "50%", }}>
                <h2>Employee by Titles</h2>
                <Chart
                chartType="ColumnChart"
                data={this.state.title}
                options={{ ...this.state.columnOptions}}
                width={"100%"}
                height={"300px"}
                />
            </div>

            <div style={{ width: "95%", marginTop: "4em" }}>
                <h2>Employees Reaching Age 65 by Month</h2>
                <Chart
                chartType="BarChart"
                data={this.state.dataReaching65}
                options={this.state.reaching65BarOptions}
                width={"100%"}
                height={"300px"}
                />
            </div>

            <div style={{ width: "50%" }}>
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

            <div style={{ width: "50%" }}>
              <h2>Employees Joined This Year</h2>
              <Chart
                chartType="ColumnChart"
                data={this.state.dataJoinedCurrentYear}
                options={this.state.joinedCurrentYearBarOptions}
                width={"100%"}
                height={"400px"}
              />
            </div>

            <div>
          <h2>Employees Joined Last 3 Months by Department</h2>
          <Chart
            width={"100%"}
            height={"400px"}
            chartType="Bar"
            data={this.state.dataJoinedLast3MonthsByDepartment}
            options={this.state.joinedLast3MonthsBarOptions}
          />
        </div>

            </div>
        </div>
      </>


    );
  }
}