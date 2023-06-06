import EmployeeDrawer from "../../navigation/DrawerNav/EmployeeDrawer"

const Employee_page = (props) => {
  const { full_name, userName } = props.route.params;
  const navigator = props.navigation.navigate;
  return (
    <EmployeeDrawer full_name={full_name} userName={userName} navigator={navigator} />
  )
}

export default Employee_page