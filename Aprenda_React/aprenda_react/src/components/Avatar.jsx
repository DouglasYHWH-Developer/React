import GetImageUrl from './GetImageUrl'

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={GetImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export default Avatar