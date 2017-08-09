var ds = new Miso.Dataset({
  key : "1vD8azULgOyAVb-cVP1WZp95V84NqIuwr6A6eTKqoK0g",
  worksheet : "1",
  importer: Miso.Dataset.Importers.GoogleSpreadsheet,
  parser : Miso.Dataset.Parsers.GoogleSpreadsheet
});
ds.fetch({
  success : function() {
    var chart_options = {
      		  dot_radius : 10,
      		  no_of_circles_in_a_row: 25,
              dot_padding_left : 15,
              dot_padding_right : 15,
              dot_padding_top : 5,
              dot_padding_bottom : 5
      		};
    console.log(ds.toJSON());
    var data = ds.toJSON();
    DotMatrixChart(data,chart_options);
  },
  error : function() {
    // your error callback here!
  }
});
