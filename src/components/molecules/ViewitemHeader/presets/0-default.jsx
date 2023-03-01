import ViewItemHeader from "../ViewItemHeader";

export default (
  <ViewItemHeader
    uxpId="viewHeader-1"
    name="Title"
    info={false}
    dropdown={{
      title: "dropdown",
      animatedValue: 3,
      onPress: () => console.log("PRESSED"),
    }}
  />
);
