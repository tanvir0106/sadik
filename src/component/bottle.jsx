const Bottle = ({bottle}) => {
    const {recipe_name, recipe_image, recipe_id} = bottle;
  return (
  <div>
    <h3>Bottle: {recipe_name}</h3>
    {/* <img src={recipe_image} alt=""/> */}
    <p>Price: ${recipe_id}
    </p>
  </div>
  );
};

export default Bottle;
//Bottle.jsx


