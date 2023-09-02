import { useEffect, useState } from "react"
import ProfileCard from "../../components/git-hunter/ProfileCard";
import Loader from "../../components/git-hunter//Loader";
import SearchBox from "../../components/git-hunter//SearchBox";
import { BASE_URL, Fetch } from "../../utils/Fetch";


function FindUser({ setError, user }) {

  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [isLoading, setisLoading] = useState(false);


  useEffect(() => {
    if (user) {
      searchUser(user.login)
    }
  }, [])



  const searchUser = async (user) => {
    setisLoading(true)
    if (inputValue || user) {
      let result = await Fetch(`${BASE_URL}/users/${inputValue || user}`)
      if (result.success) {
        setData(result.data)
      } else {
        setError(result.errorMessage)
      }
      setisLoading(false);
    }
    else {
      setError("Please enter username")
      setisLoading(false)
    }
  }



  return (
    <>
      <div className='main-container'>
        <h3 className="title">GiThunter</h3>
        <div className='center-container'>
          <SearchBox searchUser={searchUser} setInputValue={setInputValue} placeholder={"Search Username..."} />
          {isLoading && <Loader />}
          {data && !isLoading && <ProfileCard data={data} />}
        </div>
      </div>
    </>
  )
}

export default FindUser
