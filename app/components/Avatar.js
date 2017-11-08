import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Platform
} from 'react-native';

import SvgUri from './SvgUri/SvgUri';

defaultHead = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<g id="color_x5F_bg">
	<path fill="#ECF2F9" d="M12,24L12,24C5.4,24,0,18.6,0,12l0,0C0,5.4,5.4,0,12,0l0,0c6.6,0,12,5.4,12,12l0,0C24,18.6,18.6,24,12,24z"
		/>
</g>
<path fill="#ACBFCD" d="M17.7,6.5h-1c0-0.9-0.8-1.6-1.6-1.6H7.5C6.7,4.9,6,5.6,6,6.4v0.5C5.3,7,4.9,7.6,4.9,8.2v4.4H6v0.5h10.7V13
	h2.6V8.2C19.3,7.2,18.6,6.5,17.7,6.5z"/>
<path fill="#C6D4DF" d="M18.4,11.1L18.4,11.1c-0.9,0-1.6-0.8-1.6-1.6V8.6c0,0-0.1-0.2-0.1,0c-0.3,0.5-0.8,0.9-1.4,0.9H6.4
	c-0.4,0-0.8,0.3-0.8,0.8v0.9c-0.9,0-1.6,0.8-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6c0.1,3.3,2.6,6.1,5.9,6.3c3.7,0.2,6.8-2.7,6.8-6.3l0,0
	c0.9,0,1.6-0.8,1.6-1.6C20,11.8,19.2,11.1,18.4,11.1z"/>
<g id="Layer_2">
</g>
</svg>
`;

export default class Avatar extends PureComponent {
  render() {
    let avatar = null;
    const { uri, width, height, style, onLoad } = this.props;
    if (uri) {
      if (uri.indexOf('ownerId') >= 0 ) {
        avatar = <Image
          style={[style, {
            width,
            height
          }]}
          source={{ uri }}
        /> ;
      } else {
        avatar = <SvgUri
          style={style}
          source={{ uri }}
          width={width}
          height={height}
          onLoad={onLoad}
        /> ;
      }
    } else {
      avatar = <SvgUri
        style={style}
        svgXmlData={defaultHead}
        width={width}
        height={height}
        onLoad={onLoad}
      /> ;
    }
    return avatar;
  }
}