import Avatar from "./Avatar"
import Card from "./Card"

function Profile() {
  return (
   <>
    <Card>
      <Avatar 
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
     <div>
        <img 
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
    />
    </div>
    <div>
       <img
            src="https://i.imgur.com/lICfvbD.jpg"
            alt="Aklilu Lemma"
        />
    </div>
    <div>
      <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
    </div>
   
   </>
  )
}

export default Profile