import { Form, Col, Row, Button, Container} from "react-bootstrap";
import "./FormData.css";
import React from "react";


class FormData extends React.Component {
    state = {
        nama: "",
        alamat: "",
        gender: "",
        divisi: "",
        staff: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        nama: ${this.state.nama}
        alamat: ${this.state.alamat}
        gender: ${this.state.gender}
        divisi: ${this.state.divisi}
        staff: ${this.state.staff ? "YES" : "NO"}
        `)
        this.setState({
            nama: "",
            alamat: "",
            gender: "",
            divisi: "",
            staff: false
        })
    }
    render() {
        return (
            <Container fluid>
                <Form className="form-box" onSubmit={this.handleSubmit}>
                    {/* <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Masukkan Email" />
                        </Form.Group>
                
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Masukkan Password" />
                        </Form.Group>
                    </Row> */}
            
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama anda" name="nama" onChange={ e => this.setState({nama: e.target.value})} value={this.state.nama} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={ e => this.setState({alamat: e.target.value})}>
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control as="textarea" rows={3} name="alamat" value={this.state.alamat}/>
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckBox" >
                        <Form.Label>Gender</Form.Label>
                        <Form.Check name="gender" required label="Laki-Laki" type='radio' onChange={ e => this.setState({gender: e.target.value})} defaultChecked={this.state.gender} />
                        <Form.Check name="gender" required label="Perempuan" type='radio' onChange={ e => this.setState({gender: e.target.value})} defaultChecked={this.state.gender} />
                    </Form.Group>
            
                    <Form.Select aria-label="Default select example" className="mb-3" name="divisi" onChange={ e => this.setState({divisi: e.target.value})} >
                        <Form.Label>Divisi</Form.Label>
                        <option>Pilih Divisi Pekerjaan</option>
                        <option defaultValue={this.state.divisi} >Front End Developer</option>
                        <option defaultValue={this.state.divisi} >Back-End Developer</option>
                        <option defaultValue={this.state.divisi} >Development dan Operations</option>
                    </Form.Select>
                            
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Saya adalah staff" value="true" name="staff" checked={this.state.staff} onChange={ e => this.setState({staff: e.target.checked})} defaultChecked={this.state.staff} />
                    </Form.Group>
            
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
};

export default FormData;