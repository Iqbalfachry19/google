

function Avatar({url,className}) {
    return (
      
        <img className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 h-10 ${className}`} loading="lazy" src={url}  alt="profile pic" />
      
    )
}

export default Avatar
