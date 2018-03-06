import * as React from 'react';
import withData from '../src/HocLib/WithData'
import gql from "graphql-tag";
import { createUploadLink } from 'apollo-upload-client'
import { graphql, compose } from "react-apollo";
import Layout from "../src/components/Layout"
import WithMaterial from '../src/HocLib/WithMaterial'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

export interface AppProps {
  classes: any;
  handleChange: any;
}
const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});
class App extends React.Component<AppProps, any> {
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <div>
        <Layout>

          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title}>上傳檔案</Typography>
              <Typography variant="headline" component="h2">
                天氣很好的一天很適合測試
          </Typography>
              <Typography className={classes.pos}>選擇你本機的檔案吧</Typography>
              <Typography component="p">
                <input type="file" onChange={this.props.handleChange} />

              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Layout>
      </div>
    );
  }
}

const mutationUpload = gql` mutation($file: Upload!) {
  singleUpload(file: $file) {
    fileId
    filename
    encoding
    mimetype
    path
  }
}
`

export default WithMaterial(
  withStyles(styles)(
    withData(graphql<any, any>(mutationUpload, {
      props: ({ data, mutate }) => ({
        handleChange: ({ target: { validity, files: [file] } }) => {
          mutate({ variables: { file } })
        }
      })
    })(App))
  ))