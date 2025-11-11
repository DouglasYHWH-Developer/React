
import people from './data'
import GetImageUrl from './GetImageUrl'

function List() {
    const listItems = people.map((person) => {
        return(
            <li key={person.id}>
                <img
                    src={GetImageUrl(person)}
                    alt={person.name}
                />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
    </li>
        )
    }) 

     return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
        </article>
  );
        
}

export default List