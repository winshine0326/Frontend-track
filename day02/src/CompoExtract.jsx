function getImageUrl(imageId, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

export default function CompoExtract() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile 
            imgUrl="szV5sdG" 
            name="Maria Skłodowska-Curie" 
            profession="physicist and chemist" 
            awardCount="4" 
            awardContent="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
            discoverd="polonium (chemical element)"
            />
            <Profile 
            imgUrl="YfeOqp2" 
            name="Katsuko Saruhashi" 
            profession="geochemist" 
            awardCount="2" 
            awardContent="(Miyake Prize for geochemistry, Tanaka Prize)"
            discoverd="a method for measuring carbon dioxide in seawater"
            />
        </div>
    );
}


const Profile = ({ imgUrl, name, profession, awardCount, awardContent, discoverd })=>{
    return(
        <section className="profile">
          <h2>{name}</h2>
          <img
            className="avatar"
            src={getImageUrl(imgUrl)}
            alt={name}
            width={70}
            height={70}
          />
          <ul>
            <li>
              <b>Profession: </b>
              {profession}
            </li>
            <li>
              <b>Awards: {awardCount} </b>
              {awardContent}
            </li>
            <li>
              <b>Discovered: </b>
              {discoverd}
            </li>
          </ul>
        </section>
    )
}
  