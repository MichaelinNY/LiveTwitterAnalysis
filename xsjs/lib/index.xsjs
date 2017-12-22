function reset() {
	var conn;
	conn = $.hdb.getConnection();
	var fn = conn.loadProcedure("LiveTwitterAnalysis.db::reset");
	var fnResult = fn();
	conn.commit();
	conn.close();
	$.response.setBody("Reset finished");
}

function cluster() {
	var conn;
	conn = $.hdb.getConnection();
	var fn = conn.loadProcedure("LiveTwitterAnalysis.db::cluster");
	var fnResult = fn();
	conn.commit();
	conn.close();
	$.response.setBody("Clustering finished");
}

function neighborhood() {
	var conn;
	conn = $.hdb.getConnection();
	var query =
		'SELECT * FROM "LiveTwitterAnalysis.db::neighborhood" (placeholder."$$IP_USER$$"=>?,placeholder."$$IP_DIRECTION$$"=>?,placeholder."$$IP_MIN$$"=>?,placeholder."$$IP_MAX$$"=>?)';
	var user = '["' + $.request.parameters.get("user") + '"]';
	var direction = '"' + $.request.parameters.get("direction") + '"';
	var min = $.request.parameters.get("min");
	var max = $.request.parameters.get("max");
	// validate input parameters here!!!
	var argsArray = [query, user, direction, min, max];
	var result = conn.executeQuery.apply(conn, argsArray);
	conn.close();
	$.response.setBody(JSON.stringify(result));
}

var cmd = $.request.parameters.get("cmd");
switch (cmd) {
	case "reset":
		reset();
		break;
	case "cluster":
		cluster();
		break;
	case "neighborhood":
		neighborhood();
		break;
	default:
		$.response.setBody("Invalid Command: " + cmd);
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}