import withHovering from "../hoc/withHovering"
import withLoader from "../hoc/withLoading"

export const compose = (...funcs) => (...args) => {
    return funcs.reduceRight((composed, fn) => [fn(...composed)], args)[0]
}

const DogImages = (props) => {
    console.log({props})
    return props.data.message.map((dog, index) => <img src={dog} alt="Dog" key={index} />)
}

const composedHOCs = compose(withHovering, withLoader)
export default composedHOCs(DogImages, 'https://dog.ceo/api/breed/labrador/images/random/6')
// export default withHovering(
//     withLoader(
//         DogImages,
//         'https://dog.ceo/api/breed/pomeranian/images/random/6'
//     )
// )
