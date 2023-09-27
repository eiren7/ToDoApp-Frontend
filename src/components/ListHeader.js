import { useState } from "react"
import Modal from "./Modal"
import { useCookies } from "react-cookie"

const ListHeader = ({ listName, getData }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [showModal, setShowModal] = useState(false)

  const signOut = () => {
    removeCookie("Email")
    removeCookie("AuthToken")
    window.location.reload()
  }

  return (
    <div className="list-header">
      <h1 class="text-2xl">{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>
          ADD NEW
        </button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
      {showModal && (
        <Modal mode={"create"} getData={getData} setShowModal={setShowModal} />
      )}
    </div>
  )
}

export default ListHeader
