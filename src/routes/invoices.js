import { 
  Outlet,
  NavLink,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { getInvoices } from '../data';

/**
 * useLocation returns something like:
 * {
      pathame: "/invoices",
      search: "?filter=sa",
      hash: "",
      state: null,
      key: "ae4cz2j"
    }
 */
function QueryNavLink({ to, ...props}) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Invoices() {
  const invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChangeSearch = (event) => {
    let filter = event.target.value;
    if (filter)
      setSearchParams({ filter });
    else
      setSearchParams({});
  }

  return (
    <main className="App-body">
      <nav className="App-nav">
        <h2>Invoices</h2>
        <label>Find: </label>
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => handleChangeSearch(event)}
        />
        <br/>
        { invoices
          .filter(invoice => {
            const filter = searchParams.get("filter");
            if (!filter) return true;
            const name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map( invoice => (
            <QueryNavLink
              style={({ isActive }) => {
                return { color: isActive ? 'red' : 'lightblue', 
                          display: "block", 
                          margin: "0.5rem 0" };
                }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
        ))}
      </nav>
      <div className="App-content">
        <Outlet />
      </div>
    </main>
  )
}
