import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookDetail extends Component{
    render(){
        if (!this.props.book) {
            return <div>Pilih buku untuk memulai!!</div>;
        }

        return(
            <div>
                <h3>Detail for:</h3>
                <div>Judul : {this.props.book.title}</div>
                <div>Jumlah Halaman : {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        // activeBook reducer yang di daftarkan di "../reducers/index.js"
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);