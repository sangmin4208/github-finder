import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

const Home = () => {
  return (
    <div className="text-stone-100">
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home
