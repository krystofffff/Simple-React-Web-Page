import MUIDataTable from "mui-datatables";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const columns = (handleEdit, handleRemove) => [
    {
        name: "id",
        options: {
            display: "excluded",
        }
    },
    {
        name: "reason",
        label: "Reason",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "date",
        label: "Date",
        options: {
            sort: false,
        }
    },
    {
        name: "actions",
        label: "Actions",
        options: {
            filter: false,
            customBodyRender: (_, {rowData}) => <>
                <Button
                    variant="outline-info"
                    title="Edit"
                    size="sm"
                    onClick={() => handleEdit(rowData[0])}
                    className="rounded-circle"
                >
                    <FontAwesomeIcon icon={faEdit}/>
                </Button>
                <Button
                    variant="outline-danger"
                    title="Remove"
                    size="sm"
                    onClick={() => handleRemove(rowData[0])}
                    className="rounded-circle ms-2"
                >
                    <FontAwesomeIcon icon={faTrash}/>
                </Button>
            </>
        }
    },
];

const VisitsTable = ({visits, handleRemove, handleEdit}) => {

    return <MUIDataTable
        title="All visits"
        data={visits}
        options={{
            selectableRowsHideCheckboxes: true,
            jumpToPage: true,
            responsive: "standard",
            caseSensitive: false,
            selectableRows: "none",
            rowsPerPageOptions: [10],
        }}
        columns={columns(handleEdit, handleRemove)}
    />
}

export default VisitsTable;
