from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django import forms

from smartdatamodels.models import SmartDataModel


class SmartDataModelForm(forms.ModelForm):
    schema_link = forms.URLField(
        required=False,
        widget=forms.TextInput(
            attrs={
                "data-bs-toggle": "tooltip",
                "data-bs-placement": "top",
                "title": "Paste a raw link for JSON schema",
            }
        ),
    )

    def __init__(self, *args, **kwargs):
        super(SmartDataModelForm, self).__init__(*args, **kwargs)

        self.helper = FormHelper(self)

        self.helper.layout.append(Submit(name="save", value="Save"))
        self.helper.form_tag = False

    class Meta:
        model = SmartDataModel
        fields = ["name", "schema_link", "jsonschema"]