import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  ALL_COLLECTION_METHODS,
  COLLECTION_METHOD_DISPLAY_NAMES,
  Panel,
} from "../../../types";
import { Input } from "../../base/Input/Input";
import { SelectableBiomarkers } from "../SelectableBiomarkers/SelectableBiomarkers";
import { Select } from "../../base/Select/Select";
import { Button } from "../../base/Button/Button";

type Props = {
  panel?: Panel;
  onSubmit: (panel: Panel) => void;
  onCancel: () => void;
  isLoading: boolean;
};

export const PanelForm = ({ panel, onSubmit, onCancel, isLoading }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<Panel>({
    defaultValues: panel || { markers: [], name: "" },
  });

  const name = watch("name");
  const markers = watch("markers");
  const method = watch("method");

  const onSubmitHandler: SubmitHandler<Panel> = (data) => {
    onSubmit(data);
  };

  const collectionMethodOptions = ALL_COLLECTION_METHODS.map((method) => ({
    label: COLLECTION_METHOD_DISPLAY_NAMES[method],
    value: method,
  }));

  const submitButtonContent = isLoading ? (
    <i className="fa-solid fa-circle-notch animate-spin"></i>
  ) : panel ? (
    "Update"
  ) : (
    "Create"
  );

  const getSubmitButtonTooltip = () => {
    if (isLoading) {
      return panel ? "Updating your panel..." : "Creating your panel...";
    }

    if (!isValid) {
      if (!name) {
        return "Please provide a name for your panel";
      }

      if (!markers || !markers.length) {
        return "Please select at least one marker for your panel";
      }

      if (!method) {
        return "Please select a collection method for your panel";
      }
    }

    return undefined;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-3"
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Input
            label="Name"
            value={value}
            onChange={onChange}
            disabled={isLoading}
          />
        )}
      />
      <Controller
        name="markers"
        control={control}
        rules={{
          validate: (value) => {
            if (!value || value.length === 0) {
              return "At least one marker is required";
            }

            return true;
          },
        }}
        render={({ field: { onChange, value } }) => (
          <SelectableBiomarkers
            onChange={onChange}
            selected={value}
            disabled={isLoading}
          />
        )}
      />
      <Controller
        name="method"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Select
            label="Collection Method"
            value={value}
            onChange={onChange}
            options={collectionMethodOptions}
            placeholder="Select"
            disabled={isLoading}
          />
        )}
      />

      <div className="flex gap-1 justify-end mt-5">
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          id="panel-submit-btn"
          type="submit"
          disabled={isLoading || !isValid}
          variant="accent"
          tooltip={getSubmitButtonTooltip()}
        >
          {submitButtonContent}
        </Button>
      </div>
    </form>
  );
};
