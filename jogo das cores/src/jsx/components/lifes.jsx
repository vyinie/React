import "/src/css/Lifes.css"
export default function Lifes({ lifes }) {
  
  const lifePoints = []
  for(var i = lifes;  i > 0; i--){
    lifePoints.push(<p key={i} className="life" id={`life${i}`}>&#128151;</p>)
  }

  return (
    <div className="lifesContainer">
      {lifePoints}
    </div>
  );
}
