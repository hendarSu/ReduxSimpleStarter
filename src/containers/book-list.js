import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li key={book.title} className="list-group-item">{book.title}</li>
            )
        })
    }    
    
    render(){        
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books : state.books
    };
}

// apa pun yang kembali dari fungsi ini akan berakhir sebagai props
// pada BookList container (../containers/book-list.js)
function mapDispatchToProps(dispatch){
    // ketika selectBook di panggil, hasilnya harus melewati
    // untuk semua reducer
    return bindActionCreators({ selectBook:selectBook}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);