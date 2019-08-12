import React, { Component } from 'react';
import { CustomInput } from 'reactstrap';
import axios from 'axios';

class ManagePosts extends Component {
    state = { addImageFileName: 'Select Image...', addImageFile: undefined, captionAdd: '' }

    onAddImageFileChange = (e) => {
        // console.log(document.getElementById('addImagePost').files[0])
        // console.log(e.target.files[0])
        if(e.target.files[0]) {
            this.setState({ addImageFileName: e.target.files[0].name, addImageFile: e.target.files[0]})
        }
        else {
            this.setState({ addImageFileName: 'Select Image...', addImageFile: undefined })
        }
    }

    onCaptionAddChange = (e) => {
        // console.log(e.target.value)
        if(e.target.value.length <= 100) {
            this.setState({ captionAdd: e.target.value })
        }
    }

    onBtnAddPostClick = () => {
        if(this.state.addImageFile) {
            var formData = new FormData()
            var headers = {
                headers: 
                {'Content-Type': 'multipart/form-data'}
            }

            var data = {
                caption: this.state.captionAdd,
                userId: 1
            }

            formData.append('image', this.state.addImageFile)
            formData.append('data', JSON.stringify(data))

            axios.post("http://localhost:1997/post/addpost", formData, headers)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) =>{
                console.log(err)
            })
        }
        else {
            alert('Image harus diisi!')
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
                                <td><input type="button" className="btn btn-success" value="Add" onClick={this.onBtnAddPostClick}/></td>
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