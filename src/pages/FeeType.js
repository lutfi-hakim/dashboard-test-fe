import React, { Component } from "react";

import IconEdit from "../assets/icons/edit.svg";
import IconView from "../assets/icons/view.svg";
import IconDelete from "../assets/icons/delete.svg";

import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import DashboardHeader from "../components/DashboardHeader";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "./styles.css";

class FeeType extends Component {
  componentDidMount() {
    $(document).ready(function () {
      if (!$.fn.DataTable.isDataTable("#myTable")) {
        $("#table").DataTable().destroy();
      }
      $("#table").DataTable({
        responsive: true,
        deferRender: true,
        dom: `<'row'<'col-sm-6 text-left'f><'col-sm-6 text-right'B>>
              <'row'<'col-sm-12'tr>>
              <'row'<'col-sm-12 col-md-2 mt-2'l><'col-sm-12 col-md-5' i><'col-sm-12 col-md-5 dataTables_pager'p>>`,
        pagingType: "full_numbers",
        // pageLength: 20,
        // processing: true,
        select: {
          // style: "multi",
          // style: "os",
          selector: "td:first-child",
        },
        // order: [[1, "asc"]],
        buttons: [
          // {
          //   extend: "pageLength",
          //   className: "btn btn-secondary bg-secondary",
          // },
          // {
          //   extend: "copy",
          //   className: "btn btn-secondary bg-secondary",
          // },
          // {
          //   extend: "csv",
          //   className: "btn btn-secondary bg-secondary",
          // },
          {
            extend: "print",
            customize: function (win) {
              $(win.document.body).css("font-size", "10pt");
              $(win.document.body)
                .find("table")
                .addClass("compact")
                .css("font-size", "inherit");
            },
            className: "btn btn-secondary bg-secondary my-2",
          },
        ],

        // fnRowCallback: function (
        //   nRow,
        //   aData,
        //   iDisplayIndex,
        //   iDisplayIndexFull
        // ) {
        //   var index = iDisplayIndexFull + 1;
        //   $("td:first", nRow).html(index);
        //   return nRow;
        // },

        // lengthMenu: [
        //   [10, 20, 30, 50, -1],
        //   [10, 20, 30, 50, "All"],
        // ],
        columnDefs: [
          {
            orderable: false,
            className: "select-checkbox",
            targets: 0,
            // render: function (data, type, row, meta) {
            //   return type === "export" ? meta.row + 1 : data;
            // },
          },
        ],
      });
    });
  }

  // renderTooltip = (props) => (
  //   <Tooltip {...props}>Tooltip for the register button</Tooltip>
  // );

  showTable = () => {
    try {
      return names.map((item, index) => {
        console.log(item);
        return (
          <tr>
            <td className="text-sm">{item.id}</td>
            <td className="text-sm">{item.title}</td>
            <td className="text-sm">{item.description}</td>
            <td className="text-sm">{item.status}</td>
            <td>
              <div className="icon-act">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Click to Edit</Tooltip>}
                >
                  <Button
                    variant="light"
                    className="d-inline-flex align-items-center p-0 m-0"
                  >
                    <img src={IconEdit} alt="" className="act-i" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Click to View Detail</Tooltip>}
                >
                  <Button
                    variant="light"
                    className="d-inline-flex align-items-center p-0 m-0"
                  >
                    <img src={IconView} alt="" className="act-i" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Click to Delete</Tooltip>}
                >
                  <Button
                    variant="light"
                    className="d-inline-flex align-items-center p-0 m-0"
                  >
                    <img src={IconDelete} alt="" className="act-i" />
                  </Button>
                </OverlayTrigger>
              </div>
            </td>
          </tr>
        );
      });
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    return (
      <div className="dashboard-content">
        <DashboardHeader />
        <div className="dashboard-content-container">
          <table
            id="table"
            className="table table-striped table-hover table-borderless"
            width="100%"
          >
            <thead className="table-dark full-width">
              <tr>
                <th className="text-white text-xs ps-2">Fee Type Code</th>
                <th className="text-white text-xs ps-2">Fee Type Name</th>
                <th className="text-white text-xs ps-2">Description</th>
                <th className="text-white text-xs ps-2">Status</th>
                <th className="text-white text-xs ps-2">Action</th>
              </tr>
            </thead>

            <tbody>{this.showTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default FeeType;

const names = [
  {
    id: 1,
    title: "Service",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 2,
    title: "Reissue",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 3,
    title: "Cancellition",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 4,
    title: "Refund",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 5,
    title: "MDR",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 6,
    title: "After Office",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 7,
    title: "Late",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 8,
    title: "Domestic",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 9,
    title: "International Service Flight Fee",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },

  {
    id: 10,
    title: "Domestic",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 11,
    title: "mr",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 12,
    title: "mr",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 13,
    title: "mr",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 14,
    title: "mr",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
  {
    id: 15,
    title: "mr",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: "active",
  },
];
