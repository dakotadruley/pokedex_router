import React from 'react';

export default class PokeItem extends React.Component {
    render() {
        const { poke } = this.props;
        const {
            pokemon,
            type_1,
            type_2,
            height,
            weight,
            url_image,
        } = poke;

      return (
          <>
          { poke.name
          ? <div>
              <p>name: { pokemon }</p>
              <p>type: `${ type_1 } / ${ type_2 }`</p>
              <p>height: { height }</p>
              <p>weight: { weight }</p>
              <p><img src={ url_image } alt={ poke.name }/></p>
          </div>
          : <img src='' alt='loading'/>
        }
        </>
      )
    }
}
      


// do I need to accopunt for type_1 and type_2?
// add load image/ gif
