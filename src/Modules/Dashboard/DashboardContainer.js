import React from 'react';
import DashboardPresenter from "./DashboardPresenter"


const DashboardContainer = () => {
  // const test = () => {
  //   firebase
  //     .firestore()
  //     .collection("items")
  //     .add({
  //       name: "Heineken",
  //       type: "beer",
  //       qty: 5,
  //       description:
  //         "Pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken International",
  //     })
  //     .then(ref => {
  //       console.log("Added document with ID: ", ref.id)
  //     });

  // }

  return <DashboardPresenter />;
};
export default DashboardContainer;