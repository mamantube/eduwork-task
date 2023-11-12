import { Form, Col, Row, Button, Container} from "react-bootstrap";
import "./FormData.css";
import React from "react";
import ShowError from "./ShowErrors"


class FormData extends React.Component {
    state = {
        email: "",
        password: "",
        nama: "",
        alamat: "",
        gender: "",
        divisi: "Pilih Divisi Pekerjaan",
        staff: false,
        errors: []
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;

        let message = []

        if (email.length === 0) {
            message = [...message, "Email tidak boleh kosong"];
        }
        
        if (password.length === 0) {
            message = [...message, "Password tidak boleh kosong"]
        }

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!re.test(String(email).toLowerCase())) {
            message = [...message, "Email yang anda masukkan tidak valid"]
        }

        if(password.length < 8) {
            message = [...message, "Masukkan Minimal Delapan Huruf"]
        }

        if (message.length > 0) {
            this.setState({
                errors: message
            })
        } else {
           
            alert(`
            REGISTRASI BERHASIL!!!
            email: ${this.state.email}
            password: ${this.state.password}
            nama: ${this.state.nama}
            alamat: ${this.state.alamat}
            gender: ${this.state.gender}
            divisi: ${this.state.divisi}
            staff: ${this.state.staff ? "YES" : "NO"}
            errors: ${this.state.errors}
            `)  

            this.setState({
                email: "",
                password: "",
                nama: "",
                alamat: "",
                gender: "",
                divisi: "Pilih Divisi Pekerjaan",
                staff: false,
                errors: []
            })
        }

        
    }
    render() {
        return (
            <Container fluid>
                <Form className="form-box" onSubmit={this.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Masukkan Email" onChange={ e => this.setState({email: e.target.value})} value={this.state.email} />
                        </Form.Group>
                
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Masukkan Minimal 8 huruf" onChange={ e => this.setState({password: e.target.value})} value={this.state.password} />
                        </Form.Group>
                        {
                            this.state.errors && <ShowError errors={this.state.errors}/>
                        }
                    </Row>
            
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
                        <Form.Check name="gender" required label="Laki-Laki" type='radio' value="Laki-Laki" onChange={ e => this.setState({gender: e.target.value})} Checked={this.state.gender === "Laki-Laki"} />
                        <Form.Check name="gender" required label="Perempuan" type='radio' value="Perempuan" onChange={ e => this.setState({gender: e.target.value})} Checked={this.state.gender === "Perempuan"} />
                    </Form.Group>
            
                    <Form.Select aria-label="Default select example" className="mb-3" name="divisi" onChange={ e => this.setState({divisi: e.target.value})} >
                        <Form.Label>Divisi</Form.Label>
                        <option>Pilih Divisi Pekerjaan</option>
                        <option>Front End Developer</option>
                        <option>Back-End Developer</option>
                        <option>Development dan Operations</option>
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