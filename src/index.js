import { connect } from 'react-redux'
import { onlyUpdateForKeys } from 'recompose'
import classnames from 'react-css-modules-classnames'
import tapProps from 'react-tap-props'
import { compose, identity } from 'ramda'


const component = ({ tap, state, actions, styles, update }) => {
	let F = [identity]

	if (state || actions) F.push(connect(state, actions))
	if (update) F.push(onlyUpdateForKeys(update))
	if (tap) F.push(tapProps(tap))
	if (styles) F.push(classnames(styles))

	return compose(...F)
}

export default component
