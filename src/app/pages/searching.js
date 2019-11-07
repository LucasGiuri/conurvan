import InputSearch from '../components/InputSearch/InputSearch';
import InputCalendar from '../components/InputCalendar/InputCalendar';

const searching = () => (
  <div>
    Where do you want to go?
    <InputSearch placeholder="from" onChange={()=>{}} autofocus={true} />
    <InputSearch placeholder="to" onChange={()=>{}} />
    Date and time
    <InputCalendar />
  </div>
);

export default searching;