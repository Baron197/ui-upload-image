import React, { Component } from 'react';
import { CustomInput } from 'reactstrap';

class ManagePosts extends Component {
    state = { addImageFileName: 'Select Image...', captionAdd: '' }

    onAddImageFileChange = (e) => {
        // console.log(document.getElementById('addImagePost').files[0])
        // console.log(e.target.files[0])
        if(e.target.files[0]) {
            this.setState({ addImageFileName: e.target.files[0].name})
        }
        else {
            this.setState({ addImageFileName: 'Select Image...'})
        }
    }

    onCaptionAddChange = (e) => {
        // console.log(e.target.value)
        if(e.target.value.length <= 100) {
            this.setState({ captionAdd: e.target.value })
        }
    }

    render() {
        return (
            <div>
                <center>
                    <h1>Manage Posts</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Caption</th>
                                <th>User Id</th>
                                <th />
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td />
                                <td>
                                    <CustomInput id="addImagePost" type="file" label={this.state.addImageFileName} onChange={this.onAddImageFileChange} />
                                </td>
                                <td>
                                    <textarea value={this.state.captionAdd} onChange={this.onCaptionAddChange}>
                                    </textarea>
                                </td>
                                <td />
                                <td><input type="button" className="btn btn-success" value="Add" /></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </center>
            </div>
        )
    }
}

export default ManagePosts;