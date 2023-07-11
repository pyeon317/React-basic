import propTypes from 'prop-types';

function MyComponent3( {title, content, writer} ) {

  return (
    <div>
      함수형 컴포넌트<br/>
      props:{title}<br/>
      props:{content}<br/>
      props:{writer}<br/>
    </div>

  )

}

MyComponent3.defaultProps = {
  writer : 'admin'
}

MyComponent3.propTypes = {
  title : propTypes.string,
  content : propTypes.string,
  writer : propTypes.string.isRequired
}

export default MyComponent3;