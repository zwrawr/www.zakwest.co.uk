import { h } from 'preact';

import style from './style';

const filesBaseRoute = '/public/files/';
const iconBase = '/public/img/icons/files/';
const iconSuffix = '.svg';

function loadFailed(err) {
	console.warn('failed to load icon defaulting back to file icon');
	console.warn(err.target.src);
	err.target.src = iconBase + 'file' + iconSuffix;
	console.warn(err.target.src);

}

const File = ( { name, path, type, modtime } ) => {
	console.log("Rendering file");
	return (
	<div class={style.file}>
		<a href={filesBaseRoute + path} target="_blank" rel="noopener noreferrer">
			<img src={iconBase + type + iconSuffix} onerror={loadFailed} />
			<div>
				<h4>{name}</h4>
				<p>{filesBaseRoute + path}</p>
				<p>modtime : {modtime}	type : {type}</p>
			</div>
		</a>
	</div>
	);
};

export default File;
