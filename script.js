$(document).ready(function () {
    $("#country").change(function () {
        const selectedcountry = $(this).val();
        if (selectedcountry !== "") {
            alert("country selected...." + selectedcountry);
            $.ajax({
                url: `get-cities.php?country=${selectedcountry}`,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    const cityDropdown = $("#city");
                    cityDropdown.empty();

                    if (data.length > 0) {
                        cityDropdown.append("<option value=''>Select</option>");
                        $.each(data, function (index, city) {
                            cityDropdown.append(
                                $("<option></option>").attr("value", city).text(city)
                            );
                        });
                        alert(" Successfully loaded cities.");
                    }
                    else {
                        cityDropdown.append("<option value=''>No cities available</option>");
                    }
                },
                error: function () {
                    alert("Error fetching cities.");
                },
            });
        }
        else {
            $("#city").html("<option value=''>Select a country first</option>");
        }
    });
});