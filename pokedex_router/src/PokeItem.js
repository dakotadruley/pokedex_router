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
          { poke.pokemon
          ? <li className='poke'>
            <h2 id='pokeHeader'>{ pokemon }</h2>
              <table>
                <tr>
                  <td>type: { type_1 } / { type_2 }</td>
                </tr>
                <tr>
                  <td>height: { height }</td>
                  <td>weight: { weight }</td>
                </tr>
                </table>
                <div className='imageContainer'>
                  <img className='imageSize'src={ url_image } alt={ poke.pokemon }/>
              </div>
          </li>
          : <img src='' alt='loading'/>
        }
        </>
      )
    }
}
      


// do I need to accopunt for type_1 and type_2?
// add load image/ gif
