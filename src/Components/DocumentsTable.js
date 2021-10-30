import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";

const DocumentsTable = () => {

    const { data: markdowns, isLoading, error } = useFetch("http://localhost:8000/markdowns")

    let rows;
    if (markdowns) {
        rows = markdowns.map(markdown => {
            return (
                <tr key={markdown.id}>
                    <th scope="row">{markdown.id}</th>
                    <td>{markdown.name}</td>
                    <td className="text-center">
                        <Link
                            to={`/editor/${markdown.id}`}
                            className="text-dark mx-3"
                            styles={{
                                textDecoration: "none"
                            }}
                        >
                            <i className="fa fa-eye"></i>
                        </Link>
                        <Link
                            to="/"
                            className="text-dark mx-3"
                            styles={{
                                textDecoration: "none"
                            }}
                        >
                            <i className="fa fa-download"></i>
                        </Link>
                        <Link
                            to="/"
                            className="text-dark mx-3"
                            styles={{
                                textDecoration: "none"
                            }}
                        >
                            <i className="fa fa-trash"></i>
                        </Link>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="col-12 mt-3 p-0">
            <h3 className="mx-3">Your Documents</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Document</th>
                        <th className="text-center" scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {error && <td>Error</td>}
                    {isLoading && <td className="text-center">Loading...</td>}
                    {markdowns && rows}
                </tbody>
            </table>
        </div>
    );
}

export default DocumentsTable;