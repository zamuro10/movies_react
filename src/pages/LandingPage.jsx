import {MoviesGrid} from "../components/MoviesGrid";
import Search from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import {useQuery} from "../hooks/useQuery";

function LandingPage() {
  const query=useQuery();
const search=query.get("search");
const debauncedSearch=useDebounce(search,500)
  return (
  <div>
    <Search/>
    <MoviesGrid key={debauncedSearch} search={debauncedSearch}/>
  </div>
   
  )
}

export default LandingPage
