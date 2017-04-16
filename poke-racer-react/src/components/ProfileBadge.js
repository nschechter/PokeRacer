import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Modal from 'react-modal'


class ProfileBadge extends Component {
    constructor() {
      super()
      this.state = {
        redirect: false,
        isModalOpen: false,
      }
      this.handleRedirect = this.handleRedirect.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleClose = this.handleClose.bind(this)
    }


    handleRedirect() {
      return (
        <Redirect
          to='/pokemon'
        />
      )
    }

    handleSubmit(e) {
      e.preventDefault()
      localStorage.removeItem("pokeId")
      localStorage.removeItem("pokemon")
      this.setState({
        redirect: true
      })
    }

    handleClick(){
      this.setState({
        isModalOpen: true
      })
    }

    handleClose() {
      this.setState({
        isModalOpen: false,
      })
    }

    render() {
      const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

      return (
        <div className="col-md-1">
        {this.state.redirect ? this.handleRedirect() : null}
        <button onClick={this.handleClick} type="button" className="btn btn-primary btn-lg submit " >
        View Your Profile
        </button>
          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.handleClose}
            style={customStyles}
            contentLabel="Modal"
            >
              <form onSubmit={this.handleSubmit}>
                <h2>Your Profile: </h2>
                <br />
                <h4>Username: {this.props.account.username}</h4>
                <h4>Pokemon: {this.props.account.pokemon.name}</h4>
                <input className="btn btn-primary submit-btn" type="submit" value="Change Pokemon" />
              </form>
            </Modal>
        </div>
      )
    }

  }

    const mapStateToProps = (state) => {
      return  {
        account: state.Account
      }
    }

    const ConnectedProfileBadge = connect(mapStateToProps, null)(ProfileBadge)

    export default ConnectedProfileBadge
