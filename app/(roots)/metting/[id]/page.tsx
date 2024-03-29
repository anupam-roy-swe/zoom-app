import React from "react";

function Meeting({params}: {params: {String}}) {
	return <div>Meeting #{params.id}</div>;
}

export default Meeting;
