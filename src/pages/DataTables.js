// import React, { Component } from "react";
// import DataTableComp from "../components/Table/Tbl";
// import $ from "jquery";

// class DataTables extends Component {
//   componentDidMount() {
//     if (!$.fn.DataTable.isDataTable("#myTable")) {
//       $("#dTable").DataTable().destroy();
//     }
//     this.$el = $(this.el);
//     this.$el.DataTable({
//       responsive: true,
//       columnDefs: [
//         {
//           targets: [5],
//           createdCell: (td, cellData, rowData, row, col) => {
//             return (
//               (<button onClick={() => this.alertSth("hey!")}>Click</button>), td
//             );
//           },
//         },
//       ],
//     });
//   }
//   alertSth(param) {
//     alert(param);
//   }

//   render() {
//     return (
//       <div
//         className={this.props.colCss}
//         style={{ padding: 25, borderRadius: 15 }}
//       >
//         <table
//           id="dTable"
//           ref={(el) => (this.el = el)}
//           className="table table-striped table-bordered dt-responsive nowrap"
//         >
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Position</th>
//               <th>Office</th>
//               <th>Age</th>
//               <th>Start date</th>
//               <th>Salary</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Tiger Nixon</td>
//               <td>System Architect</td>
//               <td>Edinburgh</td>
//               <td>61</td>
//               <td>2011/04/25</td>
//               <td>$3,120</td>
//             </tr>
//             <tr>
//               <td>Garrett Winters</td>
//               <td>Director</td>
//               <td>Edinburgh</td>
//               <td>63</td>
//               <td>2011/07/25</td>
//               <td>$5,300</td>
//             </tr>
//             <tr>
//               <td>Ashton Cox</td>
//               <td>Technical Author</td>
//               <td>San Francisco</td>
//               <td>66</td>
//               <td>2009/01/12</td>
//               <td>$4,800</td>
//             </tr>
//             <tr>
//               <td>Cedric Kelly</td>
//               <td>Javascript Developer</td>
//               <td>Edinburgh</td>
//               <td>22</td>
//               <td>2012/03/29</td>
//               <td>$3,600</td>
//             </tr>
//             <tr>
//               <td>Jenna Elliott</td>
//               <td>Financial Controller</td>
//               <td>Edinburgh</td>
//               <td>33</td>
//               <td>2008/11/28</td>
//               <td>$5,300</td>
//             </tr>
//             <tr>
//               <td>Brielle Williamson</td>
//               <td>Integration Specialist</td>
//               <td>New York</td>
//               <td>61</td>
//               <td>2012/12/02</td>
//               <td>$4,525</td>
//             </tr>
//             <tr>
//               <td>Herrod Chandler</td>
//               <td>Sales Assistant</td>
//               <td>San Francisco</td>
//               <td>59</td>
//               <td>2012/08/06</td>
//               <td>$4,080</td>
//             </tr>
//             <tr>
//               <td>Rhona Davidson</td>
//               <td>Integration Specialist</td>
//               <td>Edinburgh</td>
//               <td>55</td>
//               <td>2010/10/14</td>
//               <td>$6,730</td>
//             </tr>
//             <tr>
//               <td>Colleen Hurst</td>
//               <td>Javascript Developer</td>
//               <td>San Francisco</td>
//               <td>39</td>
//               <td>2009/09/15</td>
//               <td>$5,000</td>
//             </tr>
//             <tr>
//               <td>Sonya Frost</td>
//               <td>Software Engineer</td>
//               <td>Edinburgh</td>
//               <td>23</td>
//               <td>2008/12/13</td>
//               <td>$3,600</td>
//             </tr>
//             <tr>
//               <td>Jena Gaines</td>
//               <td>System Architect</td>
//               <td>London</td>
//               <td>30</td>
//               <td>2008/12/19</td>
//               <td>$5,000</td>
//             </tr>
//             <tr>
//               <td>Quinn Flynn</td>
//               <td>Financial Controller</td>
//               <td>Edinburgh</td>
//               <td>22</td>
//               <td>2013/03/03</td>
//               <td>$4,200</td>
//             </tr>
//             <tr>
//               <td>Quinn Flynn</td>
//               <td>Financial Controller</td>
//               <td>Edinburgh</td>
//               <td>22</td>
//               <td>2013/03/03</td>
//               <td>$4,200</td>
//             </tr>
//             <tr>
//               <td>Quinn Flynn</td>
//               <td>Financial Controller</td>
//               <td>Edinburgh</td>
//               <td>22</td>
//               <td>2013/03/03</td>
//               <td>$4,200</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
// export default DataTables;
