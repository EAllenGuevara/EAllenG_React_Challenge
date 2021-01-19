import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { CompareTable, ProductList } from "../../components";
import * as productActions from "../../actions/product";
import { connect } from "react-redux";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      nameSearch: "",
    };
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.productActions.getProducts();
  }

  handleChange = (event) => {
    this.setState({ nameSearch: event.target.value });
    // needed to add 'this.props.actions' to get filter working here
    this.props.actions.productActions.filterProducts(
      event.target.value,
      this.props.products
    );
  };

  render() {
    const { nameSearch } = this.state;
    const { products, filters, actions } = this.props;
    const compareProducts = products.filter((product) => product.compare);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
            <input
              type="text"
              placeholder="Search by name"
              value={this.state.nameSearch}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
        </div>
        <ProductList
          /*
           * Quick and dirty way to show all products when no filter is applied
           */
          products={nameSearch ? filters : products}
          nameSearch={nameSearch}
          compare={actions.productActions.compare}
        />
        {compareProducts.length >= 1 && (
          <CompareTable products={compareProducts} />
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    products: state.product,
    filters: state.filter,
  }),
  (dispatch) => ({
    actions: {
      productActions: bindActionCreators(productActions, dispatch),
    },
  })
)(Home);
